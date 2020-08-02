23
very_fast =
fast =  0, 2, 3, 4, 6, 13, 16, 17, 23
medium = 1, 5, 7, 8, 9, 10, 11, 12, 14, 15, 18, 19, 20, 21, 22
slow = 
very_slow =

List toPostfix(expression){
	Stack stack = createStack(1, '#');
	for(int i = 0; i < expression.size(); i++){
		if(operator > 1) "Parse error";
		if(isOperand(expression[i]))
			add expression[i] to postfix; operator = 0;
		else{
			if(isEndBracket(expression[i])){
				while(peek(&stack) != openBracket(expression[i]))
					pop(&stack) and add to postfix;
				pop(&stack);
			}
			else if(isOpenBracket(expression[i]))
				push(&stack, expression[i]);
			else{
				if(operator == 1){ operator = 2; //for unary operands
					if(expression[i] == "+" || expression[i] == "-"){
						operator = 1; merge operator to next string }}
				else{
					while(precedence(peek(&stack)) >= precedence(expression[i]))
						add(&postfix, pop(&stack));
					push(&stack, expression[i]); operator = 1; }}}}
	while(peek(&stack) != '#')
		add(&postfix, pop($stack));
	return postfix;
}