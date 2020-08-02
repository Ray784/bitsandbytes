5
very_fast =
fast =  0
medium = 1, 3, 5
slow = 2, 4
very_slow = 

void push(Stack* stack, int element){
	if(stack->top == MAX-1)
		printf("Error- stack full");
	else
		
		stack->arr[++(stack->top)] = element;
	return;	
}