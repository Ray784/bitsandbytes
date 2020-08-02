#include<stdio.h>
#include<stdlib.h>
#include<stdarg.h>
#define MAX 20
//queues using arrays.

typedef struct s{
	int key;
	struct s *right;
	struct s *left;
} TreeNode;

typedef struct q{
	TreeNode* arr[MAX];
	int front;
	int rear;
} Queue;

void enqueue(Queue* queue, TreeNode* element){
	if(queue->rear == MAX-1)
		printf("Error- Queue Full\n");
	else
		queue->arr[++(queue->rear)] = element;
	if(queue->rear == 0)
		queue->front = 0;
	return;	
}

TreeNode* dequeue(Queue*queue){
	if(queue->front == -1 || queue->front > queue -> rear)
		printf("Error- Queue empty\n");
	else{
		TreeNode* out = queue->arr[(queue->front)++];
		if(queue->front > queue->rear){
			queue->front = -1;
			queue->rear = -1;
		}
		return out;	
	}
	return NULL;
}

int isEmpty(Queue queue){
	if(queue.front == -1 || queue.front > queue.rear)
		return 1;
	return 0;
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
        enqueue(&queue, va_arg(list, TreeNode*)); 
    va_end(list); 
    return queue;  
}