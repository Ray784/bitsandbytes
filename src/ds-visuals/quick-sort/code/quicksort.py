def swap(i, j, arr):
	temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp

def quicksort(arr, low, high):
	if(low < high):
		p = partition(arr, low, high);
		quicksort(arr, low, p-1);
		quicksort(arr, p+1, high);

def partition(arr, low, high):
	pivot = arr[low]
	i = low
	j = high
	while(i < j):
		while(arr[i] <= pivot and i < high):
			i += 1
		while(arr[j] > pivot):
			j -= 1
		if i < j:
			swap(i, j, arr)
	swap(low, j, arr)
	return j

arr = [65, 70, 75, 80, 85, 60, 55, 50, 45]
quicksort(arr, 0, len(arr)-1)
print(arr)
