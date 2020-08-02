8
very_fast =
fast =  0
medium = 1, 3, 6, 8
slow = 2, 4, 5, 7
very_slow = 

void enqueue(Queue* queue, int element){
	if(queue->rear == MAX-1)
		printf("Error- Queue Full\n");
	else{
		(queue->rear)++;
		queue->arr[(queue->rear)] = element;
	}
	if(queue->rear == 0)
		queue->front = 0;
	return;	
}