	def createStack(self, *elements):



		self.top = -1
		
		for element in elements:
			self.push(element)