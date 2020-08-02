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
var unSortedList = [];

qsrt_code_urls = {
	'part': baseUrl+'/snippets/quick-sort/part',
	'q-srt': baseUrl+'/snippets/quick-sort/sort'
}

qsrt_codes = ['none', 'q-srt', 'part'];

prepare_code('arr', qsrt_code_urls);
show_code(qsrt_codes, 'none');

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
	unSortedList = [];
	for(let i = 1; i <= num_inputs; i++){
		var text = $('#create_val_'+i).val();
		text = parseFloat(text);
		if(!isNaN(text)){	
			$('.alert').remove();
			create_call = 1;
			unSortedList.push(text);
		}
		if(unSortedList.length > 0)
			setUpVisual(unSortedList);
	}
	$('button').prop('disabled', false);
}


function setUpVisual(arr){
	$('#q_srt_0').empty();
	let svg = d3.select('#q_srt_0');
	for(let i = 0; i < arr.length; i++){
		moveElementTo(getArrElement(svg, arr[i], i), getX(i), getY(i));
	}
}

function getX(idx) {return startOffset + xOffset * (idx % 7);}
function getY(idx) {return startOffset + elementWidth * parseInt(idx / 7);}

async function sort_handler(){
	$('button').prop('disabled', true);
	$(window).scrollTop(0);
	if(create_call == 1){
		await quickSort(unSortedList, 0, unSortedList.length - 1);
	}
	else
		throwError('.visualizer','Create a list first', 'danger');
	$('button').prop('disabled', false);
}


async function quickSort(arr, low, high){
	show_code(qsrt_codes, 'q-srt');
	$('#scroller').show();
	await highlight_lines('arr', 1, 2, 'q-srt');
	if(low < high){
		await highlight_line('arr', 3, 'q-srt');
		let p = await partition(arr, low, high);
		await highlight_line('arr', 4, 'q-srt');

		await quickSort(arr, low, p-1);
		await highlight_line('arr', 5, 'q-srt');

		await quickSort(arr,  p+1, high);
	}  
	$('#scroller').hide();
	show_code(qsrt_codes, 'none');
}

async function swap(i, j, arr){
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	moveElementTo(getExistingElement('q_srt_0', getX(i), getY(i)), getX(j), getY(j));
	moveElementTo(getExistingElement('q_srt_0', getX(j), getY(j)), getX(i), getY(i));
	await sleep(2000);
}

async function partition(arr, low, high){
	show_code(qsrt_codes, 'part');
	$('.visualizer .alert').remove();
	d3.select('.visualizer')
		.insert('div', ":first-child")
		.attr('class',"alert alert-info")
		.text(`low: ${low}, high: ${high}`)
		.transition()
			.remove()
			.duration(25000);
	let i = low, j = high, pivot = arr[low];
	let svg = d3.select('#q_srt_0');
	let i_text = getText(svg, 'i');
	let j_text = getText(svg, 'j');
	let pivot_text = getText(svg, 'pivot');
	moveElementTo(i_text, getX(i), getY(i));
	moveElementTo(j_text, getX(j), getY(j));
	moveElementTo(pivot_text, getX(low), getY(low));
	
	showElement(getExistingElement('q_srt_0', getX(low), getY(low)), 'rect', '#FBBC05');
	$('.data').empty();
	await highlight_lines('arr', 1, 3, 'part');
	while(i < j){
		await highlight_line('arr', 4, 'part');
		while(arr[i] <= pivot && i < high){
			await highlight_line('arr', 5, 'part');
			i++;
			moveElementTo(i_text, getX(i), getY(i));
			await highlight_line('arr', 4, 'part');
		}
		await highlight_line('arr', 6, 'part');
		while(arr[j] > pivot){
			await highlight_line('arr', 7, 'part');
			j--;
			moveElementTo(j_text, getX(j), getY(j));
			await highlight_line('arr', 6, 'part');
		}
		await highlight_line('arr', 8, 'part');
		if(i < j){
			await highlight_line('arr', 9, 'part');
			await swap(i, j, arr);
		}
	}
	i_text.remove();
	await highlight_line('arr', 10, 'part');
	await swap(low, j, arr);
	j_text.remove();
	pivot_text.remove();
	await highlight_line('arr', 11, 'part');
	return j;
}