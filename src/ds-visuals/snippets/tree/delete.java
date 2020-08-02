TreeNode delete(TreeNode root, int data){

	if(root == null){
		System.out.println("Error - key: "+data+" not found");
		return root;
	}
	else if(data > root.data)
		root.right = delete(root.right, data);
	else if(data < root.data)
		root.left = delete(root.left, data);
	else{
		if(root.right == null){

			
			return root.left;
		}
		else if(root.left == null){
			

			return root.right;
		}
		else{
			TreeNode temp = root.right;
			while(temp != null && temp.left != null)
				temp = temp.left;
			root.data = temp.data;
			root.right = delete(root.right, temp.data);
		}
	}
	return root;
}