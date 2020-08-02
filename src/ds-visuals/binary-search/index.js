width = 650;
height = 420;
MAX = 10;
max = 6;

elementWidth = width * 0.1;
startOffset = width * 0.04;
xOffset = startOffset + elementWidth;
yOffset = 0.1 * width;
elementStroke = 0.005 * width;

var create_call = 0;
var sortedList = [];

binsrch_code_urls = {
	'bin-srch': baseUrl+'/snippets/binary-search/search', 
}

binsrch_codes = ['none', 'bin-srch'];

prepare_code('arr', binsrch_code_urls);
show_code(binsrch_codes, 'none');

function getArrElement(svg, data, idx){
	const nodeG = svg.append('g')
		.attr('transform',`translate(0, 0)`);
	nodeG.append('rect')
			.attr('fill', '#EFF0F3')
			.attr('width', elementWidth)
			.attr('height', elementWidth *0.6)
			.attr('stroke', '#3F51B5')
			.attr('stroke-width', elementStroke);
	nodeG.append('text')
		.attr('y', elementWidth*0.3)
		.attr('x', elementWidth / 2)
		.append('tspan')
			.attr('text-anchor','middle')
			.text(data);
	nodeG.append('text')
		.attr('y', elementWidth * 0.9)
		.attr('x', elementWidth / 2)
		.append('tspan')
			.attr('text-anchor','middle')
			.text(idx);
	return nodeG;
}

function getText(svg, data){
	const nodeG = svg.append('g')
		.attr('transform',`translate(0, 0)`);
	nodeG.append('text')
		.attr('y', elementWidth * 0.01)
		.attr('x', elementWidth / 2)
		.append('tspan')
			.attr('text-anchor','middle')
			.text(data);
	return nodeG;
}

function create_handler(){
	$('button').prop('disabled', true);
	$(window).scrollTop(0);
	sortedList = [];
	for(let i = 1; i <= num_inputs; i++){
		var text = $('#create_val_'+i).val();
		text = parseFloat(text);
		if(!isNaN(text)){	
			$('.alert').remove();
			create_call = 1;
			addElement(text);
		}
	}
	$('button').prop('disabled', false);
}

function addElement(element){
	sortedList.push(element);
	sortedList = sortedList.sort((a, b) => a - b);
	setUpVisual(sortedList);
	return;
}

function setUpVisual(arr){
	$('#bin_srch_0').empty();
	let svg = d3.select('#bin_srch_0');
	for(let i = 0; i < arr.length; i++){
		moveElementTo(getArrElement(svg, arr[i], i), getX(i), getY(i));
	}
}

async function search_handler(){
	$('button').prop('disabled', true);
	$(window).scrollTop(0);
	if(create_call == 1){
		var text = $('#srch_val').val();
		text = parseFloat(text);
		if(!isNaN(text)){
			pos = await binarySearch(sortedList, text);
			console.log(pos);
		}
		else
			throwError('.visualizer', 'Enter one input to search', 'danger');
	}
	else
		throwError('.visualizer','Create a list first', 'danger');
	$('button').prop('disabled', false);
}

function getX(idx) {return startOffset + xOffset * (idx % 7);}
function getY(idx) {return startOffset + elementWidth * parseInt(idx / 7);}

async function binarySearch(arr, x){  
	$('#scroller').show();
	let low = 0;
	let high = arr.length - 1;
	let mid = 0;
	let svg = d3.select('#bin_srch_0');
	let low_text = getText(svg, 'low');
	let high_text = getText(svg, 'high');
	let mid_text = getText(svg, 'mid');
	$('.data').empty();
	await highlight_lines('arr', 1, 2, 'bin-srch');
	while(low <= high){
		await highlight_line('arr', 3, 'bin-srch');
		mid = parseInt((low + high) / 2);
		
		$('.data').append(`<div class="alert alert-info">low: ${low}, mid: ${mid}, high: ${high}</div>`);

		showElement(getExistingElement('bin_srch_0', getX(low), getY(low)), 'rect', '#FBBC05');
		showElement(getExistingElement('bin_srch_0', getX(high), getY(high)), 'rect', '#FBBC05');
		showElement(getExistingElement('bin_srch_0', getX(mid), getY(mid)), 'rect', '#FBBC05');
		moveElementTo(low_text, getX(low), getY(low));
		moveElementTo(mid_text, getX(mid), getY(mid));
		moveElementTo(high_text, getX(high), getY(high));


		await highlight_line('arr', 4, 'bin-srch');
		if(x == arr[mid]){
			showElement(getExistingElement('bin_srch_0', getX(high), getY(high)), 'rect', '#3F51B5');
			showElement(getExistingElement('bin_srch_0', getX(low), getY(low)), 'rect', '#3F51B5');
			showElement(getExistingElement('bin_srch_0', getX(mid), getY(mid)), 'rect', '#3F51B5');
			low_text.remove();
			high_text.remove();
			mid_text.remove();
			$('.data').append(`<div class="alert alert-info">element found at index: ${mid}</div>`);
			await highlight_line('arr', 5, 'bin-srch');
			$('#scroller').hide();
			return mid;
		}
		else if(x < arr[mid]){
			await highlight_line('arr', 6, 'bin-srch');
			showElement(getExistingElement('bin_srch_0', getX(high), getY(high)), 'rect', '#3F51B5');
			high = mid-1;
			await highlight_line('arr', 7, 'bin-srch');
			showElement(getExistingElement('bin_srch_0', getX(high), getY(high)), 'rect', '#FBBC05');
			moveElementTo(high_text, getX(high), getY(high));
		}
		else{
			await highlight_line('arr', 8, 'bin-srch');
			showElement(getExistingElement('bin_srch_0', getX(low), getY(low)), 'rect', '#3F51B5');
			low = mid+1;
			await highlight_line('arr', 9, 'bin-srch');
			showElement(getExistingElement('bin_srch_0', getX(low), getY(low)), 'rect', '#FBBC05');
			moveElementTo(low_text, getX(low), getY(low));
		}
		showElement(getExistingElement('bin_srch_0', getX(mid), getY(mid)), 'rect', '#3F51B5');

	}
	showElement(getExistingElement('bin_srch_0', getX(low), getY(low)), 'rect', '#3F51B5');
	showElement(getExistingElement('bin_srch_0', getX(high), getY(high)), 'rect', '#3F51B5');
	showElement(getExistingElement('bin_srch_0', getX(mid), getY(mid)), 'rect', '#3F51B5');
	low_text.remove();
	high_text.remove();
	mid_text.remove();
	$('.data').append(`<div class="alert alert-info">element not found</div>`);
	await highlight_lines('arr', 10, 11, 'bin-srch');
	$('#scroller').hide();
	return -1;
	
}