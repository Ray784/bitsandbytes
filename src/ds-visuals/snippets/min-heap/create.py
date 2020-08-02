def createHeap(self, *elements):


	self.size = 0
	self.heap = [sys.maxsize]*(self.CAPACITY+1)
	self.heap[0] = -sys.maxsize - 1

	for element in elements:
		self.insert(element)