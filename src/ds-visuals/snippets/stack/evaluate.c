10
very_fast =
fast =  0, 2, 5, 6, 7, 8
medium = 1, 3, 4, 9, 10
slow = 
very_slow =

int evaluate(String infix){
	string []expression = toPostfix(infix);
	for(int i = 0; i < expression.size(); i++){
		if(isOperand(expression[i]))
			push(&stack, expression[i]);
		else{
			int val2 = pop(&stack);
			int val1 = pop(&stack);
			int val = calculate(val1, val2, expression[i]);
			push(&stack, val);
		}
	}
	return pop(&stack);
}
