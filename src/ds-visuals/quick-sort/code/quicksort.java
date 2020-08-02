import java.util.*;
class QuickSort{
	int arr[];
	QuickSort(int[] arr){
		this.arr = arr;
		this.quicksort(0, arr.length-1);
	}
	void swap(int i, int j){
		int temp = arr[i];
		this.arr[i] = this.arr[j];
		this.arr[j] = temp;
	}
	int partition(int low, int high){
		int pivot = this.arr[low];
		int i = low + 1, j = high;
		while(i < j){
			while(this.arr[i] <= pivot && i < high)
				i++;
			while(this.arr[j] > pivot)
				j--;
			if(i < j)
				swap(i, j);
		}
		swap(low, j);
		return j;
	}
	void quicksort(int low, int high){
		int p;
		if(low < high){
			p = partition(low, high);
			quicksort(low, p-1);
			quicksort(p+1, high);
		}
	}
}

class Main{
	public static void main(String args[]){
		int arr[] = {65, 70, 75, 80, 85, 60, 55, 50, 45};
		QuickSort quicksort = new QuickSort(arr);
		System.out.println(Arrays.toString(quicksort.arr));
	}
}