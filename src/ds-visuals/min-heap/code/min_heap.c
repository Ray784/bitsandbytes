#include<stdio.h>
#include<stdlib.h>
#include<stdarg.h>
#include<limits.h>
#define CAPACITY 10

typedef struct h{
	int arr[CAPACITY+1];
	int size;
} Heap;

int parent(int pos){
	return pos / 2;
}

int left(int pos){
	return 2 * pos;
}

int right(int pos){
	return 2 * pos + 1;
}

void swap(Heap *heap, int pos1, int pos2){
	heap->arr[pos1] += heap->arr[pos2];
	heap->arr[pos2] = heap->arr[pos1] - heap->arr[pos2];
	heap->arr[pos1] -= heap->arr[pos2];
}

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

Heap createHeap(int num_elements, ...){
	Heap heap;
	int i;
	va_list list;
	heap.size = 0;
	heap.arr[0] = INT_MIN;
    va_start(list, num_elements); 
    for (i = 1; i <= num_elements; i++) 
        insert(&heap, va_arg(list, int)); 
    va_end(list); 
    return heap;
}

void adjust(Heap* heap){
	int i = 1;
	while(i <= heap->size / 2){
		if(left(i) > heap->size || right(i) > heap->size)
			break;
		if(heap->arr[i] > heap->arr[left(i)] || heap->arr[i] > heap->arr[right(i)]){
			if(heap->arr[left(i)] < heap->arr[right(i)]){
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

int delete(Heap* heap){
	int val = heap->arr[1];
	heap->arr[1] = heap->arr[heap->size];
	heap->size--;
	adjust(heap);
	return val;
}

void print(Heap heap){
	int i;
	for(i = 1; i <= heap.size/2; i++)
		printf("node: %d left: %d, right: %d\n",heap.arr[i], heap.arr[left(i)], heap.arr[right(i)]);
	printf("\n");
}

int main(){
	Heap heap = createHeap(4, 3, 5, 2, 7);
	print(heap);

	insert(&heap, 1);
	insert(&heap, 9);
	print(heap);

	printf("\ndeleted element: %d\n", delete(&heap));
	print(heap);
	
	return 0;
}