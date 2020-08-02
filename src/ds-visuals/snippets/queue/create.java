void createQueue(int ... arg){



	this.front = -1;
	this.queue = -1;
	
	for(int i = 0; i < arg.length; i++)
		this.enqueue(arg[i]);
	
	return;
}