def heapSort(self):
	heap = hp.Heap()
	heap.createHeap(*self.arr)
	i = 0
	while(heap.size > 0):
		self.arr[i] = heap.delete()
		i += 1