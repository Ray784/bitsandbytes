5
very_fast =
fast =  0, 1
medium = 2, 3
slow = 4, 5
very_slow = 

void quicksort(int* arr, int low, int high){
	int p;
	if(low < high){
		p = partition(arr, low, high);
		quicksort(arr, low, p-1);
		quicksort(arr, p+1, high);
	}
}