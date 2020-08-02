24
very_fast =
fast =  0, 1, 2, 5, 7, 12, 13, 16, 17, 18, 19, 22, 23, 24
medium = 3, 4, 6, 8, 9, 10, 11, 14, 15, 20, 21
slow = 
very_slow = 

TreeNode *delete(TreeNode *root, int key){
	TreeNode *temp;
	if(root == NULL){
		printf("Not Found\n");
		return root;
	}
	else if(key > root -> key)
		root -> right = delete(root -> right, key);
	else if(key < root -> key)
		root -> left = delete(root -> left, key);
	else{
		if(root -> left == NULL){
			temp = root -> right;
			free(root);
			return temp;
		}
		else if(root -> right == NULL){
			temp = root -> right;
			free(root);
			return temp;
		}
		else{
			temp = root -> right;
			while(temp != NULL && temp -> left != NULL)
				temp = temp -> left;
			root -> key = temp -> key;
			root -> right = delete(root -> right, temp -> key);
		}
	}
	return root;
}