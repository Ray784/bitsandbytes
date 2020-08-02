static int binarySearch(int[] arr, int x){
	int n = arr.length, low = 0, high = n - 1, mid;
	while(low <= high){
		mid = (low + high) / 2;
		if(arr[mid] == x)
			return mid;
		else if(arr[mid] > x)
			high = mid - 1;
		else
			low = mid + 1;
	}
	System.out.println("Not Found");
	return -1;
}