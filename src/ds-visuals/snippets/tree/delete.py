def delete(self, root, data):
	
	if(root == None):
		print('Error - '+str(data)+' Node Not found')
		return root
	elif(data > root.data):
		root.right = self.delete(root.right, data)
	elif(data < root.data):
		root.left = self.delete(root.left, data)
	else:
		if(root.right == None):


			return root.left
		elif(root.left == None):

			
			return root.right
		else:
			temp = root.right
			while(temp != None and temp.left != None):
				temp = temp.left
			root.data = temp.data
			root.right = self.delete(root.right, temp.data)
	return root