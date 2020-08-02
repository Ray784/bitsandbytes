void insert(int data){
	int current;
	if(this.size == CAPACITY)
		System.out.println("Error - Heap full");
	this.size++;
	this.heap[this.size] = data;
	current = this.size;
	while(this.heap[current] > this.heap[parent(current)]){
		this.swap(current ,parent(current));
		current = parent(current);
	}
}