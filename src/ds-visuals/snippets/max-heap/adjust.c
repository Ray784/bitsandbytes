13
very_fast =
fast =  0, 4, 5, 6, 8, 9, 12, 13
medium = 1, 2, 3, 7, 10, 11
slow = 
very_slow = 

void adjust(Heap* heap){
	int i = 1;
	while(i <= heap->size / 2){
		if(left(i) > CAPACITY || right(i) > CAPACITY)
				break;
		if(heap->arr[i] < heap->arr[left(i)] || heap->arr[i] < heap->arr[right(i)]){
			if(heap->arr[left(i)] > heap->arr[right(i)]){
				swap(heap, i, left(i));
				i  = left(i);
			}
			else{
				swap(heap, i, right(i));
				i = right(i);
			}
		}
		else
			break;
	}
}