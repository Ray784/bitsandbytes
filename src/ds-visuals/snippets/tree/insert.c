12
very_fast =
fast =  0, 1, 2, 8, 10
medium = 3, 4, 5, 6, 7, 9, 11
slow = 12
very_slow = 

TreeNode *insert(TreeNode *root, int key){
	TreeNode *newNode;
	if(root == NULL){
		newNode = (TreeNode*)malloc(sizeof(TreeNode));
		newNode -> left = NULL;
		newNode -> right = NULL;
		newNode -> key = key;
		return newNode;
	}
	else if(key > root -> key)
		root -> right = insert(root -> right, key);
	else if(key <= root -> key)
		root -> left = insert(root -> left, key);
	return root;
}
