def insert(self, data):
	
	if(self.size == self.CAPACITY):
		print("Error- stack full")
	self.size += 1
	self.heap[self.size] = data
	current = self.size
	while(self.heap[current] < self.heap[self.parent(current)]):
		self.swap(current, self.parent(current));
		current = self.parent(current);
	return;