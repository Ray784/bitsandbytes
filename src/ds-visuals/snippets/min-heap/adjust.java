void adjust(){
	int i = 1;
	while(i <= this.size/2){
		if(left(i) > this.CAPACITY || right(i) > this.CAPACITY)
			break;
		if(this.heap[i] > this.heap[left(i)] || this.heap[i] > this.heap[right(i)]){
			if(this.heap[left(i)] < this.heap[right(i)]){
				this.swap(i, left(i));
				i = left(i);
			}
			else{
				this.swap(i, right(i));
				i = right(i);
			}
		}
		else
			break;
	}
}