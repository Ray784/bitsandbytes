def pop(self):
	if(self.top == -1):
		print("Error- stack empty")
	else:
		self.top -= 1
		return self.stack[self.top+1]
	return -1
