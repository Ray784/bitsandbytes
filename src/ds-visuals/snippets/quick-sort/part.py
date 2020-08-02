def partition(arr, low, high):
	pivot = arr[low]
	i = low; j = high
	while(i < j):
		while(arr[i] <= pivot and i < high):
			i += 1
		while(arr[j] > pivot):
			j -= 1
		if i < j:
			swap(i, j, arr)
	swap(low, j, arr)
	return j