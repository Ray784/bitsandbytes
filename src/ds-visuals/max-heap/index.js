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
root_rad = {x: width/2, y: yOffset};

mxheap_code_urls = {
	'create_mxheap': baseUrl+'/snippets/max-heap/create', 
	'insert_mxheap': baseUrl+'/snippets/max-heap/insert',
	'delete_mxheap': baseUrl+'/snippets/max-heap/delete',
	'adjust_mxheap': baseUrl+'/snippets/max-heap/adjust'
}

mxheap_codes = ['none', 'create_mxheap', 'insert_mxheap', 'delete_mxheap', 'adjust_mxheap'];

this.posX = new Array(capacity+1);
this.posY = new Array(capacity+1);

prepare_code('mxheap', mxheap_code_urls);
show_code(mxheap_codes, 'none');
setUpPositions();

class MaxHeap{
	constructor(data){
		$('.visualizer').append(`<svg id="mxhp_${data}" width="650" height="420"></svg>`);
		var control_string = 
			`<div id = "hp_control_${data}"><h5>Max Heap ${data+1}</h5>
			<div class="row">
				<button class="btn">Max-Heap Operation 1: </button>
				<input class="form-control row-holder" type="number" id="ins_val_${data}">
				<button class="btn btn-primary row-holder" onclick="insert_handler(${data})">Insert</button>
			</div>
			<div class="row">
				<button class="btn">Max-Heap Operation 2: </button>
				<button class="btn btn-primary row-holder" onclick="delete_handler(${data})">Delete</button>
			</div></div>`
		$('#operations').append(control_string);
		$('#operations .alert').remove();
		this.arr = new Array(capacity+1);
		this.arr.fill(Number.MIN_VALUE);
		this.svg = d3.select(`#mxhp_${data}`);
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
	$(`#mxhp_${heap.id}`).empty();
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
	pos2_elem = getExistingElement(`mxhp_${heap.id}`, posX[pos2], posY[pos2]);
	pos1_elem = getExistingElement(`mxhp_${heap.id}`, posX[pos1], posY[pos1]);
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
	if(heaps.length == 1)
		deleteDS(heaps[0]);
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
		await createMaxHeap(arr);
	}
	else
		throwError('.visualizer', 'Enter atleast one input', 'danger');
}

async function createMaxHeap(arr){
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	$('#scroller').show();
	show_code(mxheap_codes, 'create_mxheap');
	$('button').prop('disabled', true);
	await highlight_lines('mxheap', 1, 3, 'create_mxheap');
	let heap = new MaxHeap(heaps.length);
	heap.arr[0] = Number.MAX_VALUE;
	heap.heap_size = 0;
	prepareSVGHeap(heap);
	$('button').prop('disabled', true);
	await highlight_lines('mxheap', 4, 8, 'create_mxheap');
	for(let i = 0; i < arr.length; i++){
		await highlight_line('mxheap', 9, 'create_mxheap');
		await insertMaxHeap(heap, arr[i]);
		show_code(mxheap_codes, 'create_mxheap');
		await highlight_line('mxheap', 8, 'create_mxheap')
	}
	await highlight_lines('mxheap', 10, 11, 'create_mxheap');
	show_code(mxheap_codes, 'none');
	$('#scroller').hide();
	$('button').prop('disabled', false);
	heaps.push(heap);
	return heap;
}

async function insert_handler(i){
	if(heaps.length>0){
		let data = parseFloat($('#ins_val_'+i).val());
		if(!isNaN(data))
			await insertMaxHeap(heaps[i], data);
		else
			throwError('.code-viewer', 'Enter some Input', 'danger');
	}
	else
		throwError('.visualizer', 'Create a heap first!', 'danger');
}

async function insertMaxHeap(heap, data){
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	$('#scroller').show();
	show_code(mxheap_codes, 'insert_mxheap');
	$('button').prop('disabled', true);
	traverser = getTraverser(heap);


	await highlight_line('mxheap', 1, 'insert_mxheap');
	
	await highlight_line('mxheap', 2, 'insert_mxheap');
	if(heap.heap_size >= capacity){
		await highlight_line('mxheap', 3, 'insert_mxheap');
		throwError('.visualizer', 'Error - Heap full', 'danger');
		show_code(mxheap_codes, 'none');
		traverser.remove();
		$('button').prop('disabled', false);
		return;
	}

	if(heap.heap_size != 0)
		makeLine(heap, posX[parent(heap.heap_size+1)], posY[parent(heap.heap_size+1)], posX[heap.heap_size+1], posY[heap.heap_size+1]);

	moveElementTo(traverser, posX[heap.heap_size+1], posY[heap.heap_size+1]);
	await highlight_line('mxheap', 4, 'insert_mxheap');
	
	node = getNode(heap, data);
	moveElementTo(node, posX[heap.heap_size+1], posY[heap.heap_size+1]);
	showElement(node, 'circle', '#3F51B5');
	heap.arr[++heap.heap_size] = data;
	await highlight_line('mxheap', 5, 'insert_mxheap');
	
	let current = heap.heap_size;
	await highlight_line('mxheap', 6, 'insert_mxheap');
	
	await highlight_line('mxheap', 7, 'insert_mxheap');
	
	while(heap.arr[current] > heap.arr[parent(current)]){
		await highlight_line('mxheap', 8, 'insert_mxheap');
		
		await swap(heap, current, parent(current), true);
		
		show_code(mxheap_codes, 'insert_mxheap')
		current = parent(current);
		await highlight_line('mxheap', 9, 'insert_mxheap')
		
		await highlight_line('mxheap', 7, 'insert_mxheap');
	}

	show_code(mxheap_codes, 'none');
	traverser.remove();
	$('#scroller').hide();
	$('button').prop('disabled', false);
}

async function delete_handler(i){
	if(heaps.length>0)
		await deleteMaxHeap(heaps[i]);
	else
		throwError('.visualizer', 'Create a heap first!', 'danger');
}


async function deleteMaxHeap(heap){
	show_code(mxheap_codes, 'delete_mxheap');
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	$('#scroller').show();
	$('button').prop('disabled', true);
	traverser = getTraverser(heap);
	await highlight_line('mxheap', 1, 'delete_mxheap');
	if(heap.heap_size == 0){
		await highlight_line('mxheap', 2, 'delete_mxheap');
		throwError('.visualizer', 'Error - Heap empty', 'danger');
		await highlight_line('mxheap', 3, 'delete_mxheap');
		return;
	}
	await highlight_line('mxheap', 4, 'delete_mxheap');
	let val = heap.arr[1];
	moveElementTo(traverser, posX[1], posY[1]);
	await highlight_line('mxheap', 5, 'delete_mxheap');
	
	await swap(heap, 1, heap.heap_size, false);
	show_code(mxheap_codes, 'delete');
	
	heap.arr[1] = heap.arr[heap.heap_size--];
	$('.data').empty();
	d3.select('.data')
		.insert('div', ":first-child")
		.attr('class',"alert alert-info")
		.text(`deleted element(maximum): ${val}`)
		.transition()
			.remove()
			.duration(20000);
	await highlight_lines('mxheap', 6, 7, 'delete_mxheap');
	
	await adjust(heap);
	show_code(mxheap_codes, 'delete');

	await highlight_line('mxheap', 8, 'delete_mxheap');
	$('button').prop('disabled', false);
	traverser.remove();
	$('#scroller').hide();
	show_code(mxheap_codes, 'none');
	return val;
}

async function adjust(heap){
	document.getElementById(heap.svg.attr('id')).scrollIntoView();
	$('#scroller').hide();
	show_code(mxheap_codes, 'adjust_mxheap');
	$('button').prop('disabled', true);
	await highlight_lines('mxheap', 1, 2, 'adjust_mxheap');
	let i = 1;
	while(i <= heap.heap_size / 2){
		await highlight_line('mxheap', 3, 'adjust_mxheap');
		if(left(i) > capacity || right(i) > capacity){
			show_code(mxheap_codes, 'none');
			await highlight_line('mxheap', 4, 'adjust_mxheap');
			$('button').prop('disabled', false);
			break;
		}
		await highlight_line('mxheap', 5, 'adjust_mxheap');
		if((heap.arr[i] < heap.arr[left(i)]) || (heap.arr[i] < heap.arr[right(i)])){
			await highlight_line('mxheap', 6, 'adjust_mxheap');
			if(heap.arr[left(i)] > heap.arr[right(i)]){
				await highlight_line('mxheap', 7, 'adjust_mxheap');
				await swap(heap, i, left(i), true);
				await highlight_line('mxheap', 8, 'adjust_mxheap');
				i  = left(i);
			}
			else{
				await highlight_line('mxheap', 9, 'adjust_mxheap');
				await highlight_line('mxheap', 10, 'adjust_mxheap');
				await swap(heap, i, right(i), true);
				await highlight_line('mxheap', 11, 'adjust_mxheap');
				i = right(i);
			}
		}
		else{
			await highlight_lines('mxheap', 12, 13, 'adjust_mxheap');
			show_code(mxheap_codes, 'none');
			$('button').prop('disabled', false);
			$('#scroller').hide();
			break;
		}
	}
	$('#scroller').hide();
	show_code(mxheap_codes, 'none');
	$('button').prop('disabled', false);
}