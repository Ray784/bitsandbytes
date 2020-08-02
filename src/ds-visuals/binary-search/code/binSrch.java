class Main{
	static int binarySearch(int[] arr, int x){
		int n = arr.length, low = 0, high = n - 1, mid;
		while(low <= high){
			mid = (low + high) / 2;
			if(arr[mid] == x)
				return mid;
			else if(arr[mid] > x)
				high = mid - 1;
			else
				low = mid + 1;
		}
		return -1;
	}
	
	public static void main(String []args){
		int list[] = {12, 13, 14, 15, 23, 33, 56, 1234, 8968};
		int search[] = {13, 33, 1234, 2344, 8968, 12};
		System.out.printf("The list: (index: value) \n");
		for(int i = 0; i < list.length; i++)
			System.out.printf("("+i+": "+list[i]+")");
		System.out.println();
		int val;
		String res;
		for(int i = 0; i < search.length; i++){
			System.out.printf("Search for: "+search[i]);
			val = binarySearch(list, search[i]);
			res = (val == -1)?" Not found\n": " Found at: "+val+"\n";
			System.out.printf(res);
		}
	}
}