11
very_fast =
fast =  0, 1, 5, 7, 8, 9, 11
medium = 2, 3, 4, 6, 10
slow = 
very_slow = 

int binarySearch(int* arr, int x, int n){
	int high = n-1, low = 0, mid;
	while(low <= high){
		mid = (low + high) / 2;
		if(arr[mid] == x)
			return mid;
		else if(arr[mid] > x)
			high = mid - 1;
		else
			low = mid + 1;
	}
	printf("Not Found\n");
	return -1;
}