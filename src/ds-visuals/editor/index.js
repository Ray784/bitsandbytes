console_regex = [/console.log\(/g, /console.error\(/g, /console.info\(/g];
keyword_regex = []
console_string = ['parent.printToConsole("log", ', 'parent.printToConsole("err", ', 'parent.printToConsole("info", ']
keyword_string = []
keyword = ['createStack', 'push', 'pop', 'createQueue', 'enqueue', 'dequeue', 'createBST', 'insertBST', 'deleteBST']

visualizer = `<div class="card base visualizer col-md">
			<div id="output"></div>
			<div class="alert alert-success">Visualisation Appears here!</div>
			<div class="data"></div>
		</div>`;

function setupEditor(){
	$('#text').text('Loading editor');
	$('.notif').show();
	setTimeout(()=>{
		var src = localStorage.getItem('code');
		setupThemes();
		setupSamples();
		setupKeywords();
		if(src !== 'null' && src != null )
			document.getElementById('edit').contentWindow.editor.setValue(src, 1);
		$('#code-edit').show();
		$('#text').text('');
		$('.notif').hide();
		$('#code-error').show();
	}, 1000);
}

function setupThemes(){
	list_item = "<a class='dropdown-item' onclick='setTheme("
	themes = document.getElementById('edit').contentWindow.dark_themes;
	var i;
	for(i = 0; i < themes.length; i++)
		$('#theme-list').append(list_item+'"'+themes[i]+'", '+i+ ")' id='" +themes[i]+"'"+">"+themes[i]+'</a>');
	themes = document.getElementById('edit').contentWindow.light_themes;
	$('#theme-list').append('<div class="dropdown-divider"></div>');
	for(let j = 0; j < themes.length; j++,i++)
		$('#theme-list').append(list_item+'"'+themes[j]+'", '+i+ ")' id='" +themes[j]+"'"+">"+themes[j]+'</a>');
	$('#monokai').toggleClass('active');
}

function setupKeywords(){
	keyword_regex = [];
	let operators = ['+','-','*','/','%','>','<','=',':','?','&','|','~','^',',','(','[','}'];
    let op_string = '';
    let n = operators.length;
    op_string = '[\\' + operators.join('\\');
	n = keyword.length;
	op_string += "\\s+\\;]|^";
	for(let i = 0; i < n; i++){
		keyword_regex.push(new RegExp("("+op_string+")"+keyword[i],'g'));
		keyword_string.push('$1await '+keyword[i]);
	}
}

function setTheme(theme, val){
	$('#theme-list .active').toggleClass('active');
	color = document.getElementById('edit').contentWindow.pane_colors[val];
	$(".pane-top").css("background-color", color);
	$("#code-edit").css("background-color", color);
	$('#theme-list #'+theme).addClass('active');
	$('#theme').text(theme);
	document.getElementById('edit').contentWindow.changeTheme(theme);
}

function minify(content){
    let operators = ['+','-','*','/','%','++','--','**',
    '=','+=','-=','*=','/=','%=','**=','<<=','>>=','>>>=','&=','^=','|=',
    '==','===','!=','!==','>','<','<=','>=',
    ':','?','&&','||','&','|','~','^','<<','>>','>>>',','];
    content = content.replace(/\/\*[^*]*?\*\/|([^\\:]|^)\/\/.*/g,'$1');
    content = content.replace(/[\n]+/, "\n");
    content = content.replace(/[\s]+/, " ");
    let n = operators.length;
    for(let i = 0; i < n; i++)
        content = content.replace(new RegExp('[\\s]*'+'\\'+Array.from(operators[i]).join('\\')+'[\\s]*','g'), operators[i]);
    return content;
}

function parseFunctions(content){
    let content_arr = content.split(/(?=function)/g);
    let new_content = [];
    let n = content_arr.length;
    for(let i = 0; i < n; i++){
        if(content_arr[i].slice(0, 8) === "function"){
            let arr = content_arr[i].split(/(?={)/).join(';:;').split(/(?=})/).join(';:;').split(';:;');
            let open_brace = 0;
            let break_at = -1;
            let m = arr.length;
            for(let j = 0; j < m; j++){
                if(arr[j][0] == '{'){
                    break_at = j;
                    open_brace++;
                }
                if(arr[j][arr[j].length - 1] == '}'){
                    open_brace--;
                    break_at = j;
                }
                if(open_brace == 0 && break_at != -1){
                    break_at = j;
                    break; 
                }
            }
            new_content.push(arr.slice(0, break_at + 1).join(''));
            new_content.push(arr.slice(break_at + 1).join(''));
        }else
            new_content.push(content_arr[i]);
    }
    return new_content;
}


function regexSubstitute(content, regex_arr, substitute_arr){
    let n = regex_arr.length;
    for(let j = 0; j < n; j++)
        content = content.replace(regex_arr[j],substitute_arr[j]);
    return content;
}

function addScript(){
	$('#text').text('Loading executor');
	$('#run').prop('disabled', true);
	$('.notif').show();
	setTimeout(()=>{
		content = document.getElementById('edit').contentWindow.editor.getValue();
		content = minify(content);
		console.log(content);
		content = regexSubstitute(content, console_regex, console_string);
	    let content_arr = parseFunctions(content);
	    console.log(content_arr);
	    let async_funcs = [];
	    n = content_arr.length;
	    for(let i = 0; i < n; i++){
	        let prev_length = content_arr[i].length;
	        content_arr[i] = regexSubstitute(content_arr[i], keyword_regex, keyword_string);
	        if(content_arr[i].length > prev_length && content_arr[i].slice(0, 8) === "function"){
	            fname = content_arr[i].split('(')[0].slice(9);
	            if(fname.trim() == ''){
	                let idx = Math.max(content_arr[i-1].lastIndexOf(";")+1, content_arr[i-1].lastIndexOf(" "), content_arr[i-1].lastIndexOf("\n"))
	                fname = content_arr[i-1].slice(idx, -1);
	            }
	            async_funcs.push(fname.trim());
	        }
	    }
	    content = content_arr.join('');
		n = async_funcs.length;
	    for(let i = 0; i < n; i++){
	        content = content.replace(new RegExp(async_funcs[i], "g"), "await "+async_funcs[i]);
	        content = content.replace(new RegExp("await "+async_funcs[i]+"=function", "g"), async_funcs[i]+"=async function");
	        content = content.replace(new RegExp("function await "+async_funcs[i], "g"), "async function "+async_funcs[i]);
	    }
		fname = randomFName();
		
		content = fname + "var start = window.performance.now();" + content  + "\nparent.printToConsole('exec', '<br><br>Execution Completed successfully in ', ''); var end = window.performance.now(); parent.printToConsole('exec', ((end - start) / 1000)+' secs...');}";
		console.log(content);
		iframe_exec = document.getElementById('executor');
		$('#executor').contents().find('.visualizer').remove();
		$('#executor').contents().find('#vis-pane').prepend(visualizer);
		$('#executor').contents().find('#exec').remove();
		scriptTag = '<script id="exec">'
		scriptTag += content+"<";
		scriptTag += "/script>"
		$('#executor').contents().find('body').append(scriptTag);
		window.location = './#code-executor';
		$('#code-executor').show();
		$('#text').text('');
		$('.notif').hide();
		$('#err-card').html('');
	}, 1000);
}

function save(){
	$('#text').text('Saving Code');
	$('.notif').show();
	setTimeout(()=>{
		content = document.getElementById('edit').contentWindow.editor.getValue();
		src = localStorage.setItem('code', content);
		$('#text').text('');
		$('.notif').hide();
	}, 1000);
}

$(document).bind('keydown', function(e) {
  if(e.ctrlKey && (e.which == 83)) {
    e.preventDefault();
    save();
    return false;
  }
});

function randomFName(){
	let len = 20;
	let nums = '0123456789';
	let strs = "qweryuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	str = nums+strs;
	let length = str.length;
    let ans = strs[Math.floor(Math.random() * strs.length)];; 
    for (let i = len-1; i > 0; i--)
        ans += str[Math.floor(Math.random() * length)]; 
    ans+='()';
    return ''+ans+".catch((err) => {parent.printToConsole('err', err, /"+ans+"/)}).then(()=>{ $(top.document).find('#run').prop('disabled', false)});"+'\n'+'async function '+ans+' {\n';
}

let err_span = '<span style="color: red">';
let output_span = '<span style="color: black">';
let exec_span = '<span style="color: green">';
let info_span = '<span style="color: #2C649F">';
let close_span = '</span>';

function printToConsole(type, val, fun){
	value = ''
	for(i = 1; i < arguments.length; i++){
		value += " " + JSON.stringify(arguments[i]);
	}
	if(type == undefined){
		$('#err-card').html($('#err-card').html() + output_span + '<br>' + value + close_span );
	}
	else{
		if(type === 'err'){
			error = val.stack || val.line;
			$(top.document).find('#code-executor').hide();
			if(error !== undefined){
				if(fun !== undefined)
					error.replace(fun, '');
				$('#err-card').html($('#err-card').html() + err_span + '<br>' + error + '<br><br>Execution Terminated abnormally...' + close_span );
			}
			else
				$('#err-card').html($('#err-card').html() + err_span + '<br>' + val + close_span );
		}
		else if(type === 'exec')
			$('#err-card').html($('#err-card').html() + exec_span + val + close_span );
		else if(type === 'log'){
			$('#err-card').html($('#err-card').html() + output_span + '<br>' + value + close_span );
		}
		else if(type === 'info')
			$('#err-card').html($('#err-card').html() + info_span + '<br>' + value + close_span );
		else
			$('#err-card').html('Errors and console outputs appear here!');
	}	
	window.location = './#code-error';
}
