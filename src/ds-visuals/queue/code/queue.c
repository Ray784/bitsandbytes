#include<stdio.h>
#include<stdlib.h>
#include<stdarg.h>
#define MAX 3
//queues using arrays.

typedef struct q{
	int arr[MAX];
	int front;
	int rear;
} Queue;

void enqueue(Queue* queue, int element){
	if(queue->rear == MAX-1)
		printf("Error- Queue Full\n");
	else
		queue->arr[++(queue->rear)] = element;
	if(queue->rear == 0)
		queue->front = 0;
	return;	
}

int dequeue(Queue*queue){
	if(queue->front == -1)
		printf("Error- Queue empty\n");
	else{
		int out = queue->arr[(queue->front)++];
		if(queue->front > queue->rear){
			queue->front = -1;
			queue->rear = -1;
		}
		return out;	
	}
	return -1;
}

void display(Queue *queue){
	int i;
	printf("queue: ");
	for(i = queue->front; i <= queue->rear; i++)
		printf("%d ",queue->arr[i]);
	printf("\n");
	return;
}

Queue createQueue(int num_elements, ...){
	Queue queue;
	int i;
	va_list list;
	queue.front = -1;
	queue.rear = -1;
    va_start(list, num_elements); 
    for (i = 1; i <= num_elements; i++) 
        enqueue(&queue, va_arg(list, int)); 
    va_end(list); 
    return queue;  
}

int main(){
	Queue queue = createQueue(3, 100, 200, 300);
	display(&queue);
	printf("element dequeued: %d\n",dequeue(&queue));
	display(&queue);
	enqueue(&queue, 400);
	display(&queue);
	return 0;
}