10
very_fast =
fast =  0, 1, 4, 6, 8
medium = 2, 3, 5, 7, 9, 10
slow =
very_slow = 

void levelorder(TreeNode *root){
	if(root == NULL)
		return;
	Queue queue = createQueue(1, root);
	while(isEmpty(queue) == 0){
		root = dequeue(&queue);
		if(root->left != NULL)
			enqueue(&queue, root->left);
		if(root->right != NULL)
			enqueue(&queue, root->right);
		printf("%d ",root->key);
	}
}