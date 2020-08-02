int[] heapSort(int[] arr){
	int i;
	Heap heap = new Heap(arr);
	i = 0;
	while(heap.size > 0){
		arr[i] = heap.delete();
		i+=1;
	}
	return arr;
}