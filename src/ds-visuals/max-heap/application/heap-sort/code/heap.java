import java.util.*;
class Heap{
	final int CAPACITY = 10;
	int heap[] = new int[CAPACITY+1];
	int size = 0;

	int parent(int pos){
		return pos / 2;
	}

	int left(int pos){
		return 2 * pos;
	}

	int right(int pos){
		return 2 * pos + 1;
	}

	void swap(int pos1, int pos2){
		this.heap[pos1] += this.heap[pos2];
		this.heap[pos2] = this.heap[pos1] - this.heap[pos2];
		this.heap[pos1] -= this.heap[pos2];
	}

	void createHeap(int ...arg){
		Arrays.fill(this.heap, Integer.MIN_VALUE);
		this.heap[0] = Integer.MAX_VALUE;
		for(int i = 0; i < arg.length; i++)
			this.insert(arg[i]);
		return;
	}

	void insert(int data){
		if(this.size == CAPACITY)
			System.out.println("Error - Heap full");
		this.heap[++this.size] = data;
		int current = this.size;
		while(this.heap[current] > this.heap[parent(current)]){
			this.swap(current ,parent(current));
			current = parent(current);
		}
	}

	void adjust(){
		int i = 1;
		while(i <= this.size/2){
			if(left(i) > this.CAPACITY || right(i) > this.CAPACITY)
				break;
			if(this.heap[i] < this.heap[left(i)] || this.heap[i] < this.heap[right(i)]){
				if(this.heap[left(i)] > this.heap[right(i)]){
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

	int delete(){
		int val = this.heap[1];
		this.heap[1] = this.heap[this.size--];
		this.adjust();
		return val;
	}

	public String toString(){
		String result = "";
		for(int i = 1; i <= this.size/2; i++){
			String r = right(i) <= this.size? ""+this.heap[right(i)]:"";
			String l = left(i) <= this.size? ""+this.heap[left(i)]:"";
			result += "node: "+this.heap[i]+" left: "+l+" right: "+r+"\n";
		}
		return result;
	}
}