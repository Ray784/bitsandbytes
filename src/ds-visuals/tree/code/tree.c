#include<stdio.h>
#include<stdlib.h>
#include<stdarg.h>
#include"queue.c"
//queue.c must be in the same folder as this file.

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

TreeNode *delete(TreeNode *root, int key){
	TreeNode *temp;
	if(root == NULL){
		printf("key %d Not Found\n", key);
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

void inorder(TreeNode *root){
	if(root == NULL)
		return;
	inorder(root->left);
	printf("%d ",root->key);
	inorder(root->right);
}

void preorder(TreeNode *root){
	if(root == NULL)
		return;
	printf("%d ",root->key);
	preorder(root->left);
	preorder(root->right);
}

void postorder(TreeNode *root){
	if(root == NULL)
		return;
	postorder(root->left);
	postorder(root->right);
	printf("%d ",root->key);
}

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

TreeNode *createTree(int num_elements, ...){
	TreeNode *root = NULL;
	va_list elements;
	int i;
 	va_start(elements, num_elements); 

    for (i = 1; i <= num_elements; i++) 
        root = insert(root, va_arg(elements, int)); 
    va_end(elements);
    return root;
}

int main(){
	TreeNode *root = createTree(4, 10, 20, 3, 4);
	root = insert(root, 1);
	root = insert(root, 15);
	root = insert(root, 9);
	root = insert(root, 90);
	inorder(root);
	printf("\n");
	root = delete(root, 5);
	root = delete(root, 10);
	printf("\ninorder: ");
	inorder(root);
	printf("\npreorder: ");
	preorder(root);
	printf("\npostorder: ");
	postorder(root);
	printf("\nlevelorder: ");
	levelorder(root);

	return 0;
}