def preorder(root):
	if(root == None)
		return
	print(root.key, end=" ")
	preorder(root.left)
	preorder(root.right)