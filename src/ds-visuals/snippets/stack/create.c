9
very_fast =
fast =  0, 1, 2, 3, 5, 8
medium = 4, 6, 9
slow = 7
very_slow = 

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