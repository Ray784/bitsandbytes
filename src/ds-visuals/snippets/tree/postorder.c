5
very_fast =
fast =  0, 1
medium = 2, 3, 5
slow = 4
very_slow = 

void postorder(TreeNode *root){
	if(root == NULL)
		return;
	postorder(root->left);
	postorder(root->right);
	printf("%d ",root->key);
}