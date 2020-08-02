#include<stdio.h>
#include<stdlib.h>
#include<stdarg.h>
#define MAX 10
//stacks using arrays.

typedef struct stk{
	int arr[MAX];
	int top;
} Stack;

void push(Stack* stack, int element){
	if(stack->top == MAX-1)
		printf("Error- stack full");
	else
		stack->arr[++(stack->top)] = element;
	return;	
}

int pop(Stack*stack){
	if(stack->top == -1)
		printf("Error- Stack empty");
	else
		return stack->arr[(stack->top)--];	
	return -1;
}

void display(Stack *stack){
	int i;
	printf("stack: ");
	for(i = 0; i <= stack->top; i++)
		printf("%d ",stack->arr[i]);
	printf("\n");
	return;
}

Stack createStack(int num_elements, ...){
	Stack stack;
	int i;
	va_list list;
	stack.top = -1;
    va_start(list, num_elements); 
    for (i = 1; i <= num_elements; i++) 
        push(&stack, va_arg(list, int)); 
    va_end(list); 
    return stack;  
}

int main(){
	Stack stack = createStack(3, 100, 200, 300);
	display(&stack);
	printf("element popped: %d\n",pop(&stack));
	display(&stack);
	push(&stack, 400);
	display(&stack);
	return 0;
}