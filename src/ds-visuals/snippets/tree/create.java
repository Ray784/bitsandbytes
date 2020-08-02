TreeNode createTree(TreeNode root, int ...args){
	root = null;



	for(int i = 0;i < args.length; i++)
		root = insert(root, args[i]);
	
	return root; 
}