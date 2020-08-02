def quicksort(arr, low, high):
	
	if(low < high):
		p = partition(arr, low, high);
		quicksort(arr, low, p-1);
		quicksort(arr, p+1, high);