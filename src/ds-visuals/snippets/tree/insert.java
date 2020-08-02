TreeNode insert(TreeNode root, int data){

	if(root == null)




		return new TreeNode(data);
	else if(data > root.data)
		root.right = insert(root.right, data);
	else
		root.left = insert(root.left, data);
	return root;
}
