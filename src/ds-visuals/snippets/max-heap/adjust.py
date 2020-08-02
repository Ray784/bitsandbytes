def adjust(self):
	i = 1;
	while(i <= self.size//2):
		if(self.left(i) > self.CAPACITY or self.right(i) > self.CAPACITY):
			break
		if(self.heap[i] < self.heap[self.left(i)] or self.heap[i] < self.heap[self.right(i)]):
			if(self.heap[self.left(i)] > self.heap[self.right(i)]):
				self.swap(i, self.left(i))
				i = self.left(i)
			else:
				self.swap(i, self.right(i))
				i = self.right(i)
		else:
			break