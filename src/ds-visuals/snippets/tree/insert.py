def insert(self, root, data):
		
		if(root == None):




			return TreeNode(data)
		elif(data > root.data):
			root.right = self.insert(root.right, data)
		else:
			root.left = self.insert(root.left, data)
		return root