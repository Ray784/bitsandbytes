class Stack{
	final int MAX = 10;
	int stack[] = new int[MAX];
	int top = -1;

	Stack(int...arg){
		this.createStack(arg);
	}

	void push(int element){
		if(this.top == MAX-1)
			System.out.println("Error- stack full");
		else
			this.stack[++top] = element;
		return;
	}

	int pop(){
		if(this.top == -1)
			System.out.println("Error- stack empty");
		else
			return this.stack[top--];
		return -1;
	}

	void createStack(int ... arg){
		for(int i = 0; i < arg.length; i++)
			this.push(arg[i]);
		return;
	}

	void display(){
	    System.out.printf("stack: ");
		for(int i = 0; i <= this.top; i++)
			System.out.printf(this.stack[i]+" ");
		System.out.println();
	}
}

class Main{
	public static void main(String args[]){
		Stack s = new Stack(100, 200, 300);
		s.display();
		System.out.println("element popped: "+s.pop());
		s.display();
	    s.push(400);
		s.display();
	}	
}
