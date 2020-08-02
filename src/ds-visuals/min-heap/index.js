width = 650;
height = 420;
MAX = 10;
max = 6;

capacity = 31;

MAX_LVLS = 5
circleRadius = width * 0.025;
centerOffset = width * 0.02;
xOffset = 4*MAX_LVLS;
yOffset = 0.1 * width;
circleStroke = 0.005 * width;
root_rad = {x: width/2, y: yOffset}

mnheap_code_urls = {
	'create_mnheap': baseUrl+'/snippets/min-heap/create', 
	'insert_mnheap': baseUrl+'/snippets/min-heap/insert',
	'delete_mnheap': baseUrl+'/snippets/min-heap/delete',
	'adjust_mnheap': baseUrl+'/snippets/min-heap/adjust'
}

mnheap_codes = ['none', 'create_mnheap', 'insert_mnheap', 'delete_mnheap', 'adjust_mnheap'];

this.posX = new Array(capacity+1);
this.posY = new Array(capacity+1);

prepare_code('mnheap', mnheap_code_urls);
show_code(mnheap_codes, 'none');
setUpPositions();

class MaxHeap{
	constructor(data){
		$('.visualizer').append(`<svg id="mnhp_${data}" width="650" height="420"></svg>`);
		var control_string = 
			`<div id = "hp_control_${data}"><h5>Min Heap ${data+1}</h5>
			<div class="row">
				<button class="btn">Min-Heap Operation 1: </button>
				<input class="form-control row-holder" type="number" id="ins_val_${data}">
				<button class="btn btn-primary row-holder" onclick="insert_handler(${data})">Insert</button>
			</div>
			<div class="row">
				<button class="btn">Min-Heap Operation 2: </button>
				<button class="btn btn-primary row-holder" onclick="delete_handler(${data})">Delete</button>
			</div></div>`;
		$('#operations').append(control_string);
		$('#operations .alert').remove();
		this.arr = new Array(capacity+1);
		this.arr.fill(Number.MAX_VALUE);
		this.svg = d3.select(`#mnhp_${data}`);
		this.control = $(`#hp_control_${data}`);
		this.holder = heaps;
		this.id = data;
		this.heap_size = 0;
	}
}


function parent(pos){return parseInt(pos/2);}
function left(pos){return parseInt(2 * pos);}
function right(pos){return parseInt(2* pos + 1); }

function getXOffset(pos, level){
	pos = (pos % 2 == 0)? -1: 1;
	return pos * (circleRadius*(xOffset/(1<<level)));
}

function setUpPositions(){
	posX[1] = width/2;
	posY[1] = yOffset;
	let y = posY[1] + yOffset;
	let level = 1;
	for(let i = 2; i <= capacity; i++){
		posX[i] = posX[parent(i)] + getXOffset(i, level);
		posY[i] = y;
		if((i & (i+1)) == 0){
			level += 1;
			y += yOffset
		}
	}
}

function prepareSVGHeap(heap){
	$(`#mnhp_${heap.id}`).empty();
	marker = (heap.svg).append('defs').append('marker')
		.attr('id', 'arrow')
		.attr('markerWidth', '5')
		.attr('markerHeight','3.5')
		.attr('refX', 1)
		.attr('refY', 2)
		.attr('fill', '#3F51B5')
		.attr('orient', 'auto');
	marker.append('polygon')
		.attr('points', '0 0, 5 1.75, 0 3.5');
}

async function swap(heap, pos1, pos2, run){
	traverser.remove();
	pos2_elem = getExistingElement(`mnhp_${heap.id}`, posX[pos2], posY[pos2]);
	pos1_elem = getExistingElement(`mnhp_${heap.id}`, posX[pos1], posY[pos1]);
	showElement(pos1_elem, 'circle', 'red');
	showElement(pos2_elem, 'circle', 'red');

	await sleep(timer['slow']);
	moveElementTo(pos1_elem, posX[pos2], posY[pos2]);
	moveElementTo(pos2_elem, posX[pos1], posY[pos1]);

	if(run){
		heap.arr[pos1] += heap.arr[pos2];
		heap.arr[pos2] = heap.arr[pos1] - heap.arr[pos2];
		heap.arr[pos1] -= heap.arr[pos2];
	}else{
		removeLine(heap, posX[pos2], posY[pos2]);
		await sleep(timer['slow']);
		pos1_elem.remove();
	}

	showElement(pos1_elem, 'circle', '#3F51B5');
	showElement(pos2_elem, 'circle', '#3F51B5');
}

async function create_handler(){
	capacity = 31;
	if(heaps.length == 1)
		deleteDS(heaps[0])
	let arr = [];
	$('button').prop('disabled', true);
	for(let i = 1; i <= num_inputs; i++){
		var text = $('#create_val_'+i).val();
		text = parseFloat(text);
		if(!isNaN(text))	
			arr.push(text);
	}
	if(arr.length > 0){
		$('.visualizer .alert').remove();
		await createMinHeap(arr);
	}
	else
		throwError('.visualizer', 'Enter atleast one input', 'danger');
}

async function createMinHeap(arr){
	$('#scroller').show();
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	show_code(mnheap_codes, 'create_mnheap');
	$('button').prop('disabled', true);
	await highlight_lines('mnheap', 1, 3, 'create_mnheap');
	let heap = new MaxHeap(mnheaps.length);
	heap.arr[0] = Number.MIN_VALUE;
	heap.heap_size = 0;
	prepareSVGHeap(heap);
	$('button').prop('disabled', true);
	await highlight_lines('mnheap', 4, 8, 'create_mnheap');
	for(let i = 0; i < arr.length; i++){
		await highlight_line('mnheap', 9, 'create_mnheap');
		await insertMinHeap(heap, arr[i]);
		show_code(mnheap_codes, 'create_mnheap');
		await highlight_line('mnheap', 8, 'create_mnheap')
	}
	$('button').prop('disabled', true);
	await highlight_lines('mnheap', 10, 11, 'create_mnheap');
	show_code(mnheap_codes, 'none');
	$('button').prop('disabled', false);
	heaps.push(heap);
	$('#scroller').hide();
	return heap;
}

async function insert_handler(i){
	if(mnheaps.length>0){
		let data = parseFloat($('#ins_val_'+i).val());
		if(!isNaN(data))
			await insertMinHeap(mnheaps[i], data);
		else
			throwError('.code-viewer', 'Enter some Input', 'danger');
	}
	else
		throwError('.visualizer', 'Create a heap first!', 'danger');
}

async function insertMinHeap(heap, data){
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	$('#scroller').show();
	show_code(mnheap_codes, 'insert_mnheap');
	$('button').prop('disabled', true);
	traverser = getTraverser(heap);


	await highlight_line('mnheap', 1, 'insert_mnheap');
	
	await highlight_line('mnheap', 2, 'insert_mnheap');
	if(heap.heap_size >= capacity){
		await highlight_line('mnheap', 3, 'insert_mnheap');
		throwError('.visualizer', 'Error - Heap full', 'danger');
		show_code(mnheap_codes, 'none');
		traverser.remove();
		$('button').prop('disabled', false);
		$('#scroller').hide();
		return;
	}

	if(heap.heap_size != 0)
		makeLine(heap, posX[parent(heap.heap_size+1)], posY[parent(heap.heap_size+1)], posX[heap.heap_size+1], posY[heap.heap_size+1]);

	moveElementTo(traverser, posX[heap.heap_size+1], posY[heap.heap_size+1]);
	await highlight_line('mnheap', 4, 'insert_mnheap');
	
	node = getNode(heap, data);
	moveElementTo(node, posX[heap.heap_size+1], posY[heap.heap_size+1]);
	showElement(node, 'circle', '#3F51B5');
	heap.arr[++heap.heap_size] = data;
	await highlight_line('mnheap', 5, 'insert_mnheap');
	
	let current = heap.heap_size;
	await highlight_line('mnheap', 6, 'insert_mnheap');
	
	await highlight_line('mnheap', 7, 'insert_mnheap');
	
	while(heap.arr[current] < heap.arr[parent(current)]){
		await highlight_line('mnheap', 8, 'insert_mnheap');
		
		await swap(heap, current, parent(current), true);
		
		show_code(mnheap_codes, 'insert_mnheap')
		current = parent(current);
		await highlight_line('mnheap', 9, 'insert_mnheap')
		
		await highlight_line('mnheap', 7, 'insert_mnheap');
	}

	show_code(mnheap_codes, 'none');
	traverser.remove();
	$('#scroller').hide();
	$('button').prop('disabled', false);
}

async function delete_handler(i){
	if(mnheaps.length>0)
		await deleteMinHeap(mnheaps[i]);
	else
		throwError('.visualizer', 'Create a heap first!', 'danger');
}


async function deleteMinHeap(heap){
	$('#scroller').show();
	show_code(mnheap_codes, 'delete_mnheap');
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	$('button').prop('disabled', true);
	traverser = getTraverser(heap);
	await highlight_line('mnheap', 1, 'delete_mnheap');
	if(heap.heap_size == 0){
		await highlight_line('mnheap', 2, 'delete_mnheap');
		throwError('.visualizer', 'Error - Heap empty', 'danger');
		await highlight_line('mnheap', 3, 'delete_mnheap');
		$('button').prop('disabled', false);
		show_code(mnheap_codes, 'none');
		return;
	}
	await highlight_line('mnheap', 4, 'delete_mnheap');
	let val = heap.arr[1];
	moveElementTo(traverser, posX[1], posY[1]);
	await highlight_line('mnheap', 5, 'delete_mnheap');
	
	await swap(heap, 1, heap.heap_size, false);
	show_code(mnheap_codes, 'delete');
	
	heap.arr[1] = heap.arr[heap.heap_size--];
	$('.data').empty();
	throwError('.data', `deleted element(maximum): ${val}`, 'info');

	await highlight_lines('mnheap', 6, 7, 'delete_mnheap');
	
	await adjust(heap);
	show_code(mnheap_codes, 'delete');

	await highlight_line('mnheap', 8, 'delete_mnheap');
	traverser.remove();
	show_code(mnheap_codes, 'none');
	$('button').prop('disabled', false);
	$('#scroller').hide();
	return val;
}

async function adjust(heap){
	$('#scroller').show();
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	show_code(mnheap_codes, 'adjust_mnheap');
	$('button').prop('disabled', true);
	await highlight_lines('mnheap', 1, 2, 'adjust_mnheap');
	let i = 1;
	while(i <= heap.heap_size / 2){
		await highlight_line('mnheap', 3, 'adjust_mnheap');
		if(left(i) > capacity || right(i) > capacity){
			show_code(mnheap_codes, 'none');
			await highlight_line('mnheap', 4, 'adjust_mnheap');
			$('button').prop('disabled', false);
			break;
		}
		await highlight_line('mnheap', 5, 'adjust_mnheap');
		if((heap.arr[i] > heap.arr[left(i)]) || (heap.arr[i] > heap.arr[right(i)])){
			await highlight_line('mnheap', 6, 'adjust_mnheap');
			if(heap.arr[left(i)] < heap.arr[right(i)]){
				await highlight_line('mnheap', 7, 'adjust_mnheap');
				await swap(heap, i, left(i), true);
				await highlight_line('mnheap', 8, 'adjust_mnheap');
				i  = left(i);
			}
			else{
				await highlight_line('mnheap', 9, 'adjust_mnheap');
				await highlight_line('mnheap', 10, 'adjust_mnheap');
				await swap(heap, i, right(i), true);
				await highlight_line('mnheap', 11, 'adjust_mnheap');
				i = right(i);
			}
		}
		else{
			await highlight_lines('mnheap', 12, 13, 'adjust_mnheap');
			show_code(mnheap_codes, 'none');
			$('button').prop('disabled', false);
			break;
		}
	}
	show_code(mnheap_codes, 'none');
	$('button').prop('disabled', false);
	$('#scroller').hide();
}