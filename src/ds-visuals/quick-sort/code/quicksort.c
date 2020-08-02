#include<stdio.h>
#include<stdlib.h>

void swap(int i, int j, int* arr){
	int temp;
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp; 
}

void print(int*arr, int n){
	for(int i = 0; i < n; i++)
		printf("%d ",arr[i]);
	printf("\n");
}

int partition(int* arr, int low, int high){
	int pivot = arr[low];
	int i = low , j = high;
	while(i < j){
		while(arr[i] <= pivot && i < high)
			i++;
		while(arr[j] > pivot)
			j--;
		if(i < j)
			swap(i, j, arr);
	}
	swap(low, j, arr);
	return j;
}

void quicksort(int* arr, int low, int high){
	int p;
	if(low < high){
		p = partition(arr, low, high);
		quicksort(arr, low, p-1);
		quicksort(arr, p+1, high);
	}
}

int main(){
	int arr[] = {65, 70, 75, 80, 85, 60, 55, 50, 45};
	quicksort(arr, 0, 8);
	print(arr, 9);
	return 0;
}