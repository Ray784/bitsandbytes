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

void fill(int arr[], int size, int val){
	while(--size >= 0)
		arr[size] = val;
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
	while(heap->arr[current] > heap->arr[parent(current)]){
		swap(heap, current, parent(current));
		current = parent(current);
	}
}

Heap createHeap(int num_elements, ...){
	Heap heap;
	int i;
	va_list list;
	heap.size = 0;
	fill(heap.arr, CAPACITY, INT_MIN);
	heap.arr[0] = INT_MAX;
    va_start(list, num_elements); 
    for (i = 1; i <= num_elements; i++) 
        insert(&heap, va_arg(list, int)); 
    va_end(list); 
    return heap;
}

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

int delete(Heap* heap){
	int val = heap->arr[1];
	heap->arr[1] = heap->arr[heap->size];
	heap->size--;
	adjust(heap);
	return val;
}

void print(Heap heap){
	int i, left_ch, right_ch;
	for(i = 1; i <= heap.size/2; i++){
		printf("%d, ", heap.arr[i]); 
		left_ch = heap.arr[left(i)];
		right_ch =  heap.arr[right(i)];
		if(left_ch != INT_MIN)
			printf("left: %d, ", left_ch);
		if(right_ch != INT_MIN)
			printf("right: %d\n",right_ch);
	}
}

int main(){
	Heap heap = createHeap(4, 13, 4, 2, 87);
	print(heap);
	printf("\nelement removed: %d\n", delete(&heap));
	print(heap);
	insert(&heap, 3);
	printf("\n");
	print(heap);
	return 0;
}