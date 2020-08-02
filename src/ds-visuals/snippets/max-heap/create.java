void createHeap(int ...arg){



	this.size = 0;
	Arrays.fill(this.heap, Integer.MIN_VALUE);
	this.heap[0] = Integer.MAX_VALUE;

	for(int i = 0; i < arg.length; i++)
		this.insert(arg[i]);
	
	return;
}