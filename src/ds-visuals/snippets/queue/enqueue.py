def enqueue(self,element):
	if(self.rear == self.MAX - 1):
		print("Error- queue full")
	else:
		self.rear += 1
		self.queue[self.rear] = element
	if self.rear == 0:
		self.front = 0;
	return;