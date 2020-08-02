8
very_fast =
fast =  0, 1, 2, 3, 4, 7
medium = 5, 8
slow = 6
very_slow = 

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