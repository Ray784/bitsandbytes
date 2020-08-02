7
very_fast =
fast =  0, 1, 3, 6
medium = 2, 4, 5, 7
slow = 
very_slow = 

int* heapSort(int* arr, int n){
	int i;
	Heap heap = createheap(n, arr);
	i = 0;
	while(heap.size > 0){
		arr[i] = delete(&heap);
		i+=1;
	}
	return arr;
}