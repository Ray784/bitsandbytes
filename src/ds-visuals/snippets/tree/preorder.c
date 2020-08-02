5
very_fast =
fast =  0, 1
medium = 2, 3, 5
slow = 4
very_slow = 

void preorder(TreeNode *root){
	if(root == NULL)
		return;
	printf("%d ",root->key);
	preorder(root->left);
	preorder(root->right);
}
