import java.util.*;
//place and compile stack.java in the same folder as this file.
class InToPost{
	String expression;
	String postFix;
	InToPost(String expression){
		this.expression= expression;
		this.postFix = toPostFix(expression);
	}

	int precedence(char operator){
		switch(operator){
			case '+':
			case '-':
				return 1;
			case '*':
			case '/':
				return 2;
			case '^':
				return 3;
			default:
				return -1;
		}
	}

	boolean isOperand(String element) {
		try{
			Double.parseDouble(element);
			return true;
		}
		catch(Exception e){
			return false;
		}
	}

	String[] toExArray(String expression) { 
		return expression.split("(?<=[-+*/=^(){}\\[\\]])|(?=[-+*/=^(){}\\]\\[])");
	}

	boolean isEndBracket(char bracket){
		switch(bracket){
			case ')':
			case ']':
			case '}':
				return true;
			default:
				return false;
		}
	}

	boolean isOpenBracket(char bracket) {
		switch(bracket){
			case '(':
			case '[':
			case '{':
				return true;
			default:
				return false;
		}
	}

	char openBracket(char bracket){
		switch(bracket){
			case '}':
				return '{';
			case ']':
				return '[';
			case ')':
				return '(';
		}
		return '\n';
	}

	String toPostFix(String expression){
		String postFix = "";
		Stack stack = new Stack('#');
		String[] expn = toExArray(expression);
		int operator = 1;
		for (int i  =  0; i < expn.length; i++) {
			if(operator > 1){
				System.out.println("Parse error");
				return "";
			}
			if(isOperand(expn[i])){
				postFix += expn[i];
				operator = 0;
			}
			else{
				if(isEndBracket(expn[i].charAt(0))){
					while(stack.peek() != openBracket(expn[i].charAt(0)))
						postFix += stack.pop();
					stack.pop();
				}
				else if(isOpenBracket(expn[i].charAt(0)))
					stack.push(expn[i].charAt(0));
				else if(operator == 1){
					operator = 2;
					if(expn[i].charAt(0) == '+' || expn[i].charAt(0) == '-'){
						operator = 1;
						expn[i+1] = expn[i] + expn[i+1];
					}
				}
				else{
					while(precedence(stack.peek()) >= precedence(expn[i].charAt(0)))
						postFix += stack.pop()+"";
					stack.push(expn[i].charAt(0));
					operator = 1;
				}
			}
		}
		while(stack.peek() != '#'){
			postFix += stack.pop()+"";
		return postFix;
	}
}

class Main{
	public static void main(String args[]){
		InToPost toPostFix = new InToPost("1*4+5-6*(7+4)");
		System.out.println(toPostFix.postFix);
	}
}