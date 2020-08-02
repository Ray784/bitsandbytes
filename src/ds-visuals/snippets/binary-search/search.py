def binarySearch(arr, x):
	low = 0; mid = 0; high = len(arr) - 1
	while low <= high:
		mid = (low + high) // 2
		if arr[mid] == x:
			return mid
		elif arr[mid] > x:
			high = mid - 1
		else:
			low = mid + 1
	print("Not Found");
	return -1