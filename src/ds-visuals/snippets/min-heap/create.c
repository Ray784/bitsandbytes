11
very_fast =
fast =  0, 1, 2, 3, 5, 6, 7, 10
medium = 8, 11
slow = 9
very_slow = 

Heap createHeap(int num_elements, ...){
	Heap heap;
	int i;
	va_list list;
	heap.size = 0;
	heap.arr = fill(heap.arr, CAPACITY, INT_MAX);
	heap.arr[0] = INT_MIN;
    va_start(list, num_elements); 
    for (i = 1; i <= num_elements; i++) 
        insert(&heap, va_arg(list, int)); 
    va_end(list); 
    return heap;
}