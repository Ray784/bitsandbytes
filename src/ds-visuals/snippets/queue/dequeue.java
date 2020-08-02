int dequeue(){
	if(this.rear == -1)
		System.out.println("Error- queue empty");
	else{
		int out = this.queue[this.front];
		this.front++;
		if(this.front > this.rear){
			this.front = -1;
			this.rear = -1;
		}
		return out;
	}
	return -1;
}