#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int binarySearch(int* arr, int x, int n){
	int high = n-1, low = 0, mid;
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

int main(){
	int list[] = {12, 13, 14, 15, 23, 33, 56, 1234, 8968};
	int search[] = {13, 33, 1234, 2344, 8968, 12};
	int i, val;
	char *res;
	printf("The list: (index: value) \n");
	for(i = 0; i < 9; i++)
		printf("(%d: %d) ", i, list[i]);
	printf("\n");
	for(i = 0; i < 6; i++){
		printf("Search for: %d,", search[i]);
		val = binarySearch(list, search[i], 9);
		res = (val == -1)?" Not found\n": " Found at: %d\n";
		printf(res, val);
	}
	return 0;
}

