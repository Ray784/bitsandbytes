def postorder(root):
	if(root == None)
		return
	postorder(root.left)
	postorder(root.right)
	print(root.key, end=" ")
