#include<stdio.h>
#include<string.h>
#include"stack.c"
//place stack.c in the same folder as this file

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

int isOperand(char* element){
	int n = strlen(element);
	int digit = (int)element[n-1];
	if(digit >= 48 || digit <= 57 || digit == 46)
		return 1;
	return 0;
}	

int isOperator(char element){
	if()
}

char[] slice(char*string, int start, int end){
	int i, j = 0;
	char[] buffer = (char*)malloc(sizeof(char)*(end-start+1));
	for (i = start; i < end; ++i)
		buffer[j++] = string[i]; 
	buffer[j] = 0
	return buffer;
}

char[][] toExArray(char* expression){
	char[] starts = "";
	int i = 0, n = strlen(expression);
	for(i = 0; i < n; i++){

	}
}

int isEndBracket(char bracket){
	switch(bracket){
		case ')':
		case ']':
		case '}':
			return 1;
		default:
			return 0;
	}
}

int isOpenBracket(char bracket) {
	switch(bracket){
		case '(':
		case '[':
		case '{':
			return 1;
		default:
			return 0;
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

void toPostFix(char* expression){
}

int main(){
	String*str;
	toPostFix("1*4+5-6*(7+4)");
	return 0;
}