def createTree(self, root, *elements):
	root = None



	for element in elements:
		root = self.insert(root, element)
	
	return root