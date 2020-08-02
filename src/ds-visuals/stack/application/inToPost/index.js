MAX = 100;

intop_code_urls = {
	'in_to_post': baseUrl+'/snippets/stack/inToPost'
}

intop_codes = ['none', 'in_to_post'];

prepare_code('intop', intop_code_urls);
show_code(intop_codes, 'none');

function precedence(operator){
	switch(operator){
		case '+':
		case '-':
			return 1;
		case '*':
		case '/':
			return 2;
		case '^':
			return 3;
		default:
			return -1;
	}
}

function peek(stack) { return stack.arr[stack.stk_top]; }

function isOperand(element) {return isNaN(parseFloat(element))?false:true;}

function toArray(expression) { return expression.split(/([-+^\[\]\{\}*()/])/).filter((element) => {return element.length > 0}); }

function isEndBracket(bracket){
	switch(bracket){
		case ')':
		case ']':
		case '}':
			return true;
		default:
			return false;
	}
}

function isOpenBracket(bracket) {
	switch(bracket){
		case '(':
		case '[':
		case '{':
			return true;
		default:
			return false;
	}
}

function openBracket(bracket){
	switch(bracket){
		case '}':
			return '{';
		case ']':
			return '[';
		case ')':
			return '(';
	}
}

function showIndex(element, color){
	d3.select(element)
	.transition()
	.style('border-color',color)
	.duration(timer['medium']);
}

async function postfix_handler(){
	$('#expn').empty();
	$('#pofx').empty();
	$('.data').empty();
	let infx = $('#inp_val').val();
	let pofx = await toPostfix(infx);
	$('.data').empty();
	$('.data').append('<div class="alert alert-info">Infix expression: '+infx+'</div>');
	$('.data').append('<div class="alert alert-info">Postfix expression: '+pofx.join(' ')+'</div>');
}

async function toPostfix(expression){
	$('button').prop('disabled', true);
	$('#scroller').show();
	$(window).scrollTop(0);
	let postfix = [];
	show_code(intop_codes, 'in_to_post');
	await highlight_line('intop', 1, 'in_to_post');

	expression = toArray(expression);
	$('#expn').append('Infix Expression<br><br>')
	$('#pofx').append('Postfix Expression<br><br>')
	for(let i = 0; i < expression.length; i++){
		$('#expn').append(`<span class="expn_val" id='val_${i}'>${expression[i]}</span>`)
	}
	$('#expn').append('<br><br>')
	let stack = await createStack(['#'], 'none');
	show_code(intop_codes, 'in_to_post');
	let operator = 1;
	for(let i = 0; i < expression.length; i++){
		await highlight_line('intop', 2, 'in_to_post');
		showIndex(`#val_${i}`, 'red');
		if(operator > 1){
			await highlight_line('intop', 3, 'in_to_post');
			console.error('parse error');
			return;
		}
		await highlight_line('intop', 4, 'in_to_post');
		if(isOperand(expression[i])){
			$('#pofx').append(`<span class="expn_val" id='ans_${i}'>${expression[i]}</span>`)
			showIndex(`#ans_${i}`, 'green');
			postfix.push(expression[i]);
			await highlight_line('intop', 5, 'in_to_post');
			showIndex(`#ans_${i}`, '#2196F3');
			operator = 0;
		}
		else{
			await highlight_line('intop', 6, 'in_to_post');
			await highlight_line('intop', 7, 'in_to_post');
			if(isEndBracket(expression[i])){
				await highlight_line('intop', 8, 'in_to_post');
				while(peek(stack) != openBracket(expression[i])){
					await highlight_line('intop', 9, 'in_to_post');
					let val = await pop(stack);
					show_code(intop_codes, 'in_to_post');
					postfix.push(val);
					$('#pofx').append(`<span class="expn_val" id='ans_${i}'>${val}</span>`)
					showIndex(`#ans_${i}`, 'green');
					await highlight_line('intop', 9, 'in_to_post');
					showIndex(`#ans_${i}`, '#2196F3');
					await highlight_line('intop', 8, 'in_to_post');
				}
				await highlight_line('intop', 10, 'in_to_post');
				await pop(stack);
				show_code(intop_codes, 'in_to_post');
			}
			else if(isOpenBracket(expression[i])){
				await highlight_line('intop', 11, 'in_to_post');
				await highlight_line('intop', 12, 'in_to_post');
				await push(stack, expression[i]);
				show_code(intop_codes, 'in_to_post');
			}
			else{
				await highlight_line('intop', 13, 'in_to_post');
				await highlight_line('intop', 14, 'in_to_post');
				if(operator == 1){
					operator = 2;
					await highlight_line('intop', 15, 'in_to_post');
					if(expression[i] == '+' || expression[i] == '-'){
						operator = 1;
						await highlight_line('intop', 16, 'in_to_post');
						expression[i+1] = expression[i] + expression[i+1];
					}
				}
				else{
					await highlight_line('intop', 17, 'in_to_post');
					await highlight_line('intop', 18, 'in_to_post');
					while(precedence(peek(stack)) >= precedence(expression[i])){
						let val = await pop(stack);
						show_code(intop_codes, 'in_to_post');
						postfix.push(val);
						$('#pofx').append(`<span class="expn_val" id='ans_${i}'>${val}</span>`)
						showIndex(`#ans_${i}`, 'green');
						await highlight_line('intop', 19, 'in_to_post');
						showIndex(`#ans_${i}`, '#2196F3');
						await highlight_line('intop', 18, 'in_to_post');
					}
					await highlight_line('intop', 20, 'in_to_post');
					await push(stack, expression[i]);
					show_code(intop_codes, 'in_to_post');
					operator = 1;
				}
			}
		}
	}
	j = 0;
	await highlight_line('intop', 21, 'in_to_post');
	while(peek(stack) != '#'){
		await highlight_line('intop', 22, 'in_to_post');
		val = await pop(stack);
		$('#pofx').append(`<span class="expn_val" id='ans_last_${j}'>${val}</span>`)
		showIndex(`#ans_last_${j}`, 'green');
		postfix.push(val);
		show_code(intop_codes, 'in_to_post');
		showIndex(`#ans_last_${j}`, '#2196F3');
		j+=1;
		await highlight_line('intop', 21, 'in_to_post');
	}
	await highlight_line('intop', 23, 'in_to_post');
	deleteDS(stack)
	show_code(intop_codes, 'none');
	$('button').prop('disabled', false);
	$('#scroller').hide();
	return postfix;
}

//toPostfix('1+2*(3^4-5)^(6+7*8)-9');

function isAllowed(event){
	let keyCode = event.which?event.which:event.keycode;
	num_low = 40;
	num_high = 57;
	allowed = [91,93,94,123,125];
	notallowed = [44];
	if(((keyCode>=num_low && keyCode<=num_high) || (allowed.includes(keyCode))) && (!notallowed.includes(keyCode)))
		return true;
	return false;
}

 $('input').on('paste', (event) => event.preventDefault())