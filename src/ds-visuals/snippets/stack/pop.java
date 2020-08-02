int pop(){
	if(this.top == -1)
		System.out.println("Error- stack empty");
	else
		
		return this.stack[top--];
	return -1;
}