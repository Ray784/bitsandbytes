def inorder(root):
	if(root == None)
		return
	inorder(root.left)
	print(root.key, end=" ")
	inorder(root.right)