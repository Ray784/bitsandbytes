void enqueue(int element){
	if(this.rear == MAX-1)
		System.out.println("Error- queue full");
	else{
		this.rear++;
		this.queue[this.rear] = element;
	}
	if(this.rear == 0)
		this.front = 0;
	return;
}