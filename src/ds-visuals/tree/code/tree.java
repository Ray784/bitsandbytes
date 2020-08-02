//place and compile queue.java in the same folder as this file.
class Tree{
	TreeNode createTree(TreeNode root, int ...args){
		for(int i = 0;i < args.length; i++)
			root = insert(root, args[i]);
		return root; 
	}

	TreeNode insert(TreeNode root, int data){
		if(root == null)
			root = new TreeNode(data);
		else if(data > root.data)
			root.right = insert(root.right, data);
		else
			root.left = insert(root.left, data);
		return root;
	}

	TreeNode delete(TreeNode root, int data){
		if(root == null)
			System.out.println("Error - key: "+data+" not found");
		else if(data > root.data)
			root.right = delete(root.right, data);
		else if(data < root.data)
			root.left = delete(root.left, data);
		else{
			if(root.right == null)
				return root.left;
			else if(root.left == null)
				return root.right;
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

	void preorder(TreeNode root){
		if(root == null)
			return;
		System.out.printf(root.data+" ");
		preorder(root.left);
		preorder(root.right);
	}

	void inorder(TreeNode root){
		if(root == null)
			return;
		inorder(root.left);
		System.out.printf(root.data+" ");
		inorder(root.right);
	}

	void postorder(TreeNode root){
		if(root == null)
			return;
		postorder(root.left);
		postorder(root.right);
		System.out.printf(root.data+" ");
	}
	void levelorder(TreeNode root){
		if(root == null)
			return;
		Queue queue = new Queue();
		queue.createQueue(root);
		while(!queue.isEmpty()){
			root = queue.dequeue();
			if(root.left != null)
				queue.enqueue(root.left);
			if(root.right != null)
				queue.enqueue(root.right);
			System.out.printf(root.data+" ");
		}
	}
}

class Main{
	public static void main(String args[]){
		TreeNode root = null;
		Tree tree = new Tree();
		root = tree.createTree(root, 10, 20, 3, 4);
		root = tree.insert(root, 1);
		root = tree.insert(root, 15);
		root = tree.insert(root, 9);
		root = tree.insert(root, 90);
		tree.inorder(root);
		System.out.println();
		root = tree.delete(root, 5);
		root = tree.delete(root, 10);
		System.out.printf("\ninorder: ");
		tree.inorder(root);
		System.out.printf("\npreorder: ");
		tree.preorder(root);
		System.out.printf("\npostorder: ");
		tree.postorder(root);
		System.out.printf("\nlevelorder: ");
		tree.levelorder(root);
	}
}