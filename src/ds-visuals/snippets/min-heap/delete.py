def delete(self):
	val = self.heap[1]
	if(self.size == 0):
		print("Heap Empty\n")
		return -1
	self.heap[1] = self.heap[self.size]
	self.size -= 1
	self.adjust()
	return val;