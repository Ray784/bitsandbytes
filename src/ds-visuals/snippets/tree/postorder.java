void postorder(TreeNode root){
	if(root == null)
		return;
	postorder(root.left);
	postorder(root.right);
	System.out.printf(root.key+" ");
}