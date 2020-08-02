void quicksort(int low, int high){
	int p;
	if(low < high){
		p = partition(low, high);
		quicksort(low, p-1);
		quicksort(p+1, high);
	}
}