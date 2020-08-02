width = 650;
height = 420;
MAX = 10;
max = 6;
create_call = 0;
unSortedList = [];

hpsort_code_urls = {
	'heap_sort': baseUrl+'/snippets/max-heap/heap_sort'
}

hpsort_codes = ['none', 'heap_sort'];

prepare_code('hpsort', hpsort_code_urls);
show_code(hpsort_codes, 'none');

elementWidth = width * 0.1;
startOffset = width * 0.04;
xOffset = startOffset + elementWidth;
yOffset = 0.1 * width;
elementStroke = 0.005 * width;

function getArrElement(svg, data, idx){
	const nodeG = svg.append('g')
		.attr('transform',`translate(0, 0)`);
	nodeG.append('rect')
			.attr('fill', '#EFF0F3')
			.attr('width', elementWidth)
			.attr('height', elementWidth *0.6)
			.attr('stroke', '#2196F3')
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

function getX(idx) {return startOffset + xOffset * (idx % 7);}
function getY(idx) {return startOffset + elementWidth * parseInt(idx / 7);}

function create_handler(){
	$('button').prop('disabled', true);
	$(window).scrollTop(0);
	unSortedList = [];
	for(let i = 1; i <= num_inputs; i++){
		var text = $('#create_val_'+i).val();
		text = parseFloat(text);
		if(!isNaN(text)){	
			$('.visualizer .alert').remove();
			create_call = 1;
			unSortedList.push(parseFloat(text));
		}
		setUpVisual(unSortedList);
	}
	$('button').prop('disabled', false);
}

function setUpVisual(arr){
	$('#hp_sort_0').empty();
	let svg = d3.select('#hp_sort_0');
	for(let i = 0; i < arr.length; i++){
		moveElementTo(getArrElement(svg, arr[i], i), getX(i), getY(i));
	}
}

async function heap_sort_handler(){
	$('button').prop('disabled', true);
	if(create_call == 1)
		unSortedList = await heapSort(unSortedList)
	else
		throwError('.visualizer','Create a list first', 'danger');
	$('button').prop('disabled', false);
}

async function heapSort(list){
	
	show_code(hpsort_codes, 'heap_sort');
	$('#scroller').show();
	await highlight_line('hpsort', 1, 'heap_sort');
	let heap = await createMaxHeap(list);
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	$('button').prop('disabled', true);
	
	await highlight_lines('hpsort', 2, 3, 'heap_sort');
	let i = 0;
	list = []
	setUpVisual(list);

	await highlight_line('hpsort', 4, 'heap_sort');
	while(heap.heap_size > 0){
		await highlight_line('hpsort', 5, 'heap_sort');
		list[i] = await deleteMaxHeap(heap);
			await highlight_line('hpsort', 6, 'heap_sort');
		setUpVisual(list);
		i += 1;
		await highlight_line('hpsort', 4, 'heap_sort');
	}
	deleteDS(heap);
	await highlight_lines('hpsort', 7, 'heap_sort');
	show_code(hpsort_codes, 'none');
	$('#scroller').hide();
	return list;
}