11
very_fast =
fast =  0, 1, 2, 3, 6, 8, 10
medium = 4, 5, 7, 9, 11
slow = 
very_slow = 

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