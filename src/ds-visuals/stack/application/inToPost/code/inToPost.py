import re
s = __import__('stack');
#place stack.py in same directory as this file
class InToPost(object):
	def __init__(self, expression):
		super(InToPost, self).__init__()
		self.expression = expression
		self.postFix = self.toPostFix(self.expression)

	def precedence(self, operator):
		if operator == '+' or operator == '-':
			return 1
		elif operator == '*' or operator == '/':
			return 2
		elif operator == '^':
			return 3
		else:
			return -1

	def isOperand(self, element):
		try:
			float(element)
			return True
		except:
			return False

	def toExArray(self, expression):
		return re.findall('[\+-/\*()\[\]{}]|[0-9\.]+', expression)

	def isEndBracket(self, bracket):
		if bracket == ')' or bracket == ']' or bracket == '}':
			return True
		return False

	def isOpenBracket(self, bracket):
		if bracket == '(' or bracket == '[' or bracket == '{':
			return True
		return False

	def openBracket(self, bracket):
		if(bracket == '}'):
			return '{'
		elif bracket == ']':
			return '['
		elif bracket == ')':
			return '('
		else:
			return '\n'

	def toPostFix(self, expression):
		postFix = ''
		stack = s.Stack();
		stack.createStack('#')
		expn = self.toExArray(expression)
		operator = 1
		for i in range(len(expn)):
			if operator > 1:
				print("Parse error")
				return;
			if self.isOperand(expn[i]):
				postFix += expn[i];
				operator = 0
			else:
				if self.isEndBracket(expn[i]):
					while stack.peek() != self.openBracket(expn[i]):
						postFix += stack.pop()
					stack.pop()
				elif self.isOpenBracket(expn[i]):
					stack.push(expn[i])
				elif operator == 1:
					operator = 2
					if expn[i] == '+' or expn[i] == '-':
						operator = 1
						expn[i+1] = expn[i] + expn[i+1]
				else:
					while(self.precedence(stack.peek()) >= self.precedence(expn[i])):
						postFix += stack.pop()
					stack.push(expn[i])
					operator = 1
		while stack.peek() != '#':
			postFix += stack.pop();
		return postFix;


toPostFix = InToPost("1*4+5-6*(7+4)")
print(toPostFix.postFix)



