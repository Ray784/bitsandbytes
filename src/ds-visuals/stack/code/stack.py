class Stack(object):
	"""docstring for Stack"""
	def __init__(self):
		super(Stack, self).__init__()
		self.top = -1
		self.MAX = 10
		self.stack = [0]*self.MAX

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

	def display(self):
		print('stack: ', end="")
		for i in range(self.top+1):
			print(str(self.stack[i])+" ", end="")
		print()

	def createStack(self, *elements):
		for element in elements:
			self.push(element)


s = Stack()
s.createStack(100, 200, 300)
s.display()
print("element popped: "+str(s.pop()))
s.display()
s.push(400)
s.display()
