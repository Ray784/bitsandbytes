#include<stdlib.h>
#include<stdarg.h>
#define MAX 10
//stacks using arrays.

typedef struct stk{
	char arr[MAX];
	int top;
} Stack;

void push(Stack* stack, char element){
	if(stack->top == MAX-1)
		printf("Error- stack full");
	else
		stack->arr[++(stack->top)] = element;
	return;	
}

char pop(Stack*stack){
	if(stack->top == -1)
		printf("Error- Stack empty");
	else
		return stack->arr[(stack->top)--];	
	return -1;
}

char peek(Stack*stack){
	return stack->arr[stack->top];
}

Stack createStack(int num_elements, ...){
	Stack stack;
	int i;
	va_list list;
	stack.top = -1;
    va_start(list, num_elements); 
    for (i = 1; i <= num_elements; i++) 
        push(&stack, (char)va_arg(list, int)); 
    va_end(list); 
    return stack;  
}