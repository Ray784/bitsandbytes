5
very_fast =
fast =  0, 1
medium = 2, 3, 5
slow = 4
very_slow = 

void inorder(TreeNode *root){
	if(root == NULL)
		return;
	inorder(root->left);
	printf("%d ",root->key);
	inorder(root->right);
}
