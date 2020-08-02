10
very_fast =
fast =  0, 1, 2, 3, 6, 9
medium = 4, 5, 7, 10
slow = 8
very_slow = 

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