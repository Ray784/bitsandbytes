hp = __import__('heap');
#place heap.py (max_heap.py - name changed) in same directory

class HeapSort(object):
	def __init__(self, arr):
		super(HeapSort, self).__init__()
		self.arr = arr

	def printH(self):
		print(self.arr)

	def heapSort(self):
		heap = hp.Heap()
		heap.createHeap(*self.arr)
		i = 0
		while(heap.size > 0):
			self.arr[i] = heap.delete()
			i += 1

arr = [4, 13, 6, 2, 87, 21, 65]
heapSort = HeapSort(arr)
heapSort.printH()
heapSort.heapSort()
heapSort.printH()