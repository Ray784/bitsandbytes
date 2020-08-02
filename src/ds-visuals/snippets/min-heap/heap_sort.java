void heapSort(){
	int i;
	Heap heap = new Heap();
	heap.createHeap(this.arr);
	i = 0;
	while(heap.size > 0){
		this.arr[i] = heap.delete();
		i+=1;
	}
}