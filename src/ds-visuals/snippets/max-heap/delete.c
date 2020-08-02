8
very_fast =
fast =  0, 1, 2, 8
medium = 3, 4, 5, 6, 7
slow = 
very_slow = 

int delete(Heap* heap){
	int val = heap->arr[1];
	if(heap->size == 0){
		printf("Heap Empty\n");
		return -1;
	}
	heap->arr[1] = heap->arr[heap->size];
	heap->size--;
	adjust(heap);
	return val;
}