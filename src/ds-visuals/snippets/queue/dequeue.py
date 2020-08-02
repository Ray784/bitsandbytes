def dequeue(self):
	if(self.rear == -1):
		print("Error- queue empty")
	else:
		out = self.queue[self.front]
		self.front += 1
		if(self.front > self.rear):
			self.front = -1
			self.rear = -1
		return out
	return -1