class Stack{
	final int MAX = 10;
	char stack[] = new char[MAX];
	int top = -1;

	Stack(char...arg){
		this.createStack(arg);
	}

	void push(char element){
		if(this.top == MAX-1)
			System.out.println("Error- stack full");
		else
			this.stack[++(this.top)] = element;
		return;
	}

	char pop(){
		if(this.top == -1)
			System.out.println("Error- stack empty");
		else
			return this.stack[(this.top)--];
		return '\n';
	}

	char peek(){
		return this.stack[top];
	}

	void createStack(char... arg){
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
