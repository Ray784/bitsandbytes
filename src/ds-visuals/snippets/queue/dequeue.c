10
very_fast =
fast =  0
medium = 1, 3, 6, 9, 10
slow = 2, 4, 5, 7, 8
very_slow = 

int dequeue(Queue*queue){
	if(queue->front == -1)
		printf("Error- Queue empty\n");
	else{
		int out = queue->arr[(queue->front)];
		(queue->front)++;
		if(queue->front > queue->rear){
			queue->front = -1;
			queue->rear = -1;
		}
		return out;	
	}
	return -1;
}