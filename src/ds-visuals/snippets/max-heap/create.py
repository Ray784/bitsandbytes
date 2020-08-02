def createHeap(self, *elements):



	self.size = 0
	self.heap = [-sys.maxsize-1]*(self.CAPACITY+1)
	self.heap[0] = sys.maxsize
	
	for element in elements:
		self.insert(element)