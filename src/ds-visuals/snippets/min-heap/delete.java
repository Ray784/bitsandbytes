int delete(){
	int val = this.heap[1];
	if(this.size== 0){
		System.out.println("Heap Empty");
		return -1;
	}
	this.heap[1] = this.heap[this.size];
	this.size--;
	this.adjust();
	return val;
}