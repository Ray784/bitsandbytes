void inorder(TreeNode root){
	if(root == null)
		return;
	inorder(root.left);
	System.out.printf(root.key+" ");
	inorder(root.right);
}