void createHeap(int ...arg){




	Arrays.fill(this.heap, Integer.MAX_VALUE);
	this.heap[0] = Integer.MIN_VALUE;

	for(int i = 0; i < arg.length; i++)
		this.insert(arg[i]);
	
	return;
}