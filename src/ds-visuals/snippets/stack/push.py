def push(self,element):
	if(self.top == self.MAX-1):
		print("Error- stack full")
	else:
		self.top += 1
		self.stack[self.top] = element
	return;