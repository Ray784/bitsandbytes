class Stack(object):
	"""docstring for Stack"""
	def __init__(self):
		super(Stack, self).__init__()
		self.top = -1
		self.MAX = 10
		self.stack = ['']*self.MAX

	def push(self,element):
		if(self.top == self.MAX-1):
			print("Error- stack full")
		else:
			self.top += 1
			self.stack[self.top] = element
		return;

	def pop(self):
		if(self.top == -1):
			print("Error- stack empty")
		else:
			self.top -= 1
			return self.stack[self.top+1]
		return -1

	def peek(self):
		return self.stack[self.top]

	def display(self):
		print('stack: ', end="")
		for i in range(self.top+1):
			print(str(self.stack[i])+" ", end="")
		print()

	def createStack(self, *elements):
		for element in elements:
			self.push(element)
