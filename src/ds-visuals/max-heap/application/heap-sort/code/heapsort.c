#include <stdio.h>
#include <conio.h>
#include "heap.c"

void print(int*arr, int n){
	for(int i = 0; i < n; i++)
		printf("%d ",arr[i]);
	printf("\n");
}

void heapSort(int* arr, int n){
	int i;
	Heap heap = createHeap(1, arr[0]);
	for(i = 1; i < n;  i++)
		insert(&heap, arr[i]);
	i = 0;
	while(heap.size > 0){
		arr[i] = delete(&heap);
		i+=1;
	}
}

int main(){
	int arr[] = {4, 13, 6, 2, 87, 21, 65};
	int n = 7;
	print(arr, n);
	heapSort(arr, n);
	print(arr, n);
	return 0;
}