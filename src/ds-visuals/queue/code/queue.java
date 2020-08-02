class Queue{
	final int MAX = 10;
	int queue[] = new int[MAX];
	int front = -1;
	int rear = -1;
	Queue(int ... arg){
		this.createQueue(arg);
	}

	void enqueue(int element){
		if(this.rear == MAX-1)
			System.out.println("Error- queue full");
		else
			this.queue[++rear] = element;
		if(this.rear == 0)
			this.front = 0;
		return;
	}

	int dequeue(){
		if(this.rear == -1)
			System.out.println("Error- queue empty");
		else{
			int out = this.queue[front++];
			if(front > rear){
				front = -1;
				rear = -1;
			}
			return out;
		}
		return -1;
	}

	void createQueue(int ... arg){
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
}

class Main{
	public static void main(String args[]){
		Queue q = new Queue(100, 200, 300);
		q.display();
		System.out.println("element dequeued: "+q.dequeue());
		q.display();
	    q.enqueue(400);
		q.display();
	}	
}
