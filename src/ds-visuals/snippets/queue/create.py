def createQueue(self, *elements):



	self.front = -1;
	self.rear = -1;
	
	for element in elements:
		self.enqueue(element)