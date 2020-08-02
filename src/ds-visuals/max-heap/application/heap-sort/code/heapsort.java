import java.util.*;
//compile max_heap.java in the same directory after rmoving the Main class
class HeapSort{
	int arr[];
	HeapSort(int[] arr){
		this.arr = arr;
	}

	void print(){
		System.out.println(Arrays.toString(this.arr));
	}

	void heapSort(){
		int i;
		Heap heap = new Heap();
		heap.createHeap(this.arr);
		i = 0;
		while(heap.size > 0){
			this.arr[i] = heap.delete();
			i+=1;
		}
	}

	public static void main(String[] args) {
		int arr[] = {4, 13, 6, 2, 87, 21, 65};
		HeapSort heapsort = new HeapSort(arr);
		heapsort.print();
		heapsort.heapSort();
		heapsort.print();
	}
}