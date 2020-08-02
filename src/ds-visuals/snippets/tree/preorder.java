void preorder(TreeNode root){
	if(root == null)
		return;
	System.out.printf(root.key+" ");
	preorder(root.left);
	preorder(root.right);
}