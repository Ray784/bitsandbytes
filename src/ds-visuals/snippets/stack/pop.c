5
very_fast =
fast =  0
medium = 1, 3, 5
slow = 2, 4
very_slow = 

int pop(Stack*stack){
	if(stack->top == -1)
		printf("Error- Stack empty");
	else
		
		return stack->arr[(stack->top)--];	
	return -1;
}