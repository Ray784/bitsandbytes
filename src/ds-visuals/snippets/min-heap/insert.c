9
very_fast =
fast =  0, 1, 2, 6, 9
medium = 3, 4, 5, 7, 8
slow = 
very_slow = 

void insert(Heap* heap, int data){
	int current;
	if(heap->size == CAPACITY)
		printf("Error - Heap full\n");
	heap->size++;
	heap->arr[heap->size] = data;
	current = heap->size; 
	while(heap->arr[current] < heap->arr[parent(current)]){
		swap(heap, current, parent(current));
		current = parent(current);
	}
}