class TreeNode{
	int data;
	TreeNode right;
	TreeNode left;
	TreeNode(int data){
		this.data = data;
		this.right = null;
		this.left = null;
	}
}
class Queue{
	final int MAX = 10;
	TreeNode queue[] = new TreeNode[MAX];
	int front = -1;
	int rear = -1;

	void enqueue(TreeNode element){
		if(this.rear == MAX-1)
			System.out.println("Error- queue full");
		else
			this.queue[++rear] = element;
		if(this.rear == 0)
			this.front = 0;
		return;
	}

	TreeNode dequeue(){
		if(this.rear == -1)
			System.out.println("Error- queue empty");
		else{
			TreeNode out = this.queue[front++];
			if(front > rear){
				front = -1;
				rear = -1;
			}
			return out;
		}
		return null;
	}

	void createQueue(TreeNode ... arg){
		for(int i = 0; i < arg.length; i++)
			this.enqueue(arg[i]);
		return;
	}

	void display(){
	    System.out.printf("queue: ");
		for(int i = front; i <= this.rear; i++)
			System.out.printf(this.queue[i]+" ");
		System.out.println();
	}

	boolean isEmpty(){
		if(this.front == -1 || this.front > this.rear)
			return true;
		return false;
	}
}
