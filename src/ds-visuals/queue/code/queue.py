class Queue(object):
	"""docstring for Queue"""
	def __init__(self):
		super(Queue, self).__init__()
		self.rear = -1
		self.front = -1
		self.MAX = 10
		self.queue = [0]*self.MAX

	def enqueue(self,element):
		if(self.rear == self.MAX - 1):
			print("Error- queue full")
		else:
			self.rear += 1
			self.queue[self.rear] = element
		if self.rear == 0:
			self.front = 0;
		return;

	def dequeue(self):
		if(self.rear == -1):
			print("Error- queue empty")
		else:
			out = self.queue[self.front]
			self.front += 1
			if(self.front > self.rear):
				self.front = self.rear = -1;
			return out
		return -1

	def display(self):
		print('queue: ', end="")
		for i in range(self.front, self.rear+1):
			print(str(self.queue[i])+" ", end="")
		print()

	def createQueue(self, *elements):
		for element in elements:
			self.enqueue(element)


q = Queue()
q.createQueue(100, 200, 300)
q.display()
print("element dequeued: "+str(q.dequeue()))
q.display()
q.enqueue(400)
q.display()
