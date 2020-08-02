def binarySearch(arr, x):
	low = 0
	mid = 0
	high = len(arr) - 1
	while low <= high:
		mid = (low + high) // 2
		if arr[mid] == x:
			return mid
		elif arr[mid] > x:
			high = mid - 1
		else:
			low = mid + 1
	return -1

list_ = [12, 13, 14, 15, 23, 33, 56, 1234, 8968]
search = [13, 33, 1234, 2344, 8968, 12]
print("The list: (index: value)")
for i in range(len(list_)):
	print("("+str(i)+": "+str(list_[i])+") ", end = "")
print()
for i in search:
	print("search for "+str(i)+",", end = "")
	val = binarySearch(list_, i);
	res = " Not found!" if val == -1 else " Found at: "+str(val)
	print(res)

		