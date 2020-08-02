void push(int element){
	if(this.top == MAX-1)
		System.out.println("Error- stack full");
	else
		
		this.stack[++top] = element;
	return;
}