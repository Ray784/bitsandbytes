MAX = 100;

ineval_code_urls = {
	'in_eval': baseUrl+'/snippets/stack/evaluate'
}

ineval_codes = ['none', 'in_eval'];

prepare_code('ineval', ineval_code_urls);
show_code(ineval_codes, 'none');

function calculate(operand1, operand2, operator){
	val1 = parseFloat(operand1);
	val2 = parseFloat(operand2);
	switch(operator){
		case '+':
			return val1 + val2;
		case '-':
			return val1 - val2;
		case '/':
			return val1 / val2;
		case '*':
			return val1 * val2;
		case '^':
			return Math.pow(val1, val2);
	}
}

async function evaluate(expression){
	show_code(ineval_codes, 'in_eval');
	$(window).scrollTop(0);
	$('#scroller').show();
	await highlight_line('ineval', 1, 'in_eval');
	expression = await toPostfix(expression);
	show_code(ineval_codes, 'in_eval');
	let stack = null;
	for(i = 0; i < expression.length; i++){
		await highlight_line('ineval', 2, 'in_eval');
		if(isOperand(expression[i])){
			await highlight_line('ineval', 3, 'in_eval');
			await highlight_line('ineval', 4, 'in_eval');
			if(stack == null)
				stack = await createStack([expression[i]], 'none');
			else
				await push(stack, expression[i]);
			$('button').prop('disabled', true);
			show_code(ineval_codes, 'in_eval');
		}
		else{
			await highlight_line('ineval', 5, 'in_eval');
			await highlight_line('ineval', 6, 'in_eval');
			let val2 = await pop(stack);
			$('button').prop('disabled', true);
			show_code(ineval_codes, 'in_eval');
			await highlight_line('ineval', 7, 'in_eval');
			let val1 = await pop(stack);
			$('button').prop('disabled', true);
			show_code(ineval_codes, 'in_eval');
			$('#expn').append(`<div class="alert alert-info">val1 = ${val1}, val2 = ${val2}, operator = ${expression[i]}</div>`);
			await highlight_line('ineval', 8, 'in_eval');
			let val = calculate(val1, val2, expression[i]);
			await highlight_line('ineval', 9, 'in_eval');
			if(stack == null)
				stack = await createStack([val])
			else
				await push(stack, val);
			$('button').prop('disabled', true);
			show_code(ineval_codes, 'in_eval');

		}
	}
	await highlight_line('ineval', 10, 'in_eval');
	show_code(ineval_codes, 'none');
	deleteDS(stack);
	$('#scroller').hide();
	return await pop(stack);	
}

async function evaluate_handler(){
	$('button').prop('disabled', true);
	$('#expn').empty();
	$('#pofx').empty();
	$('.data').empty();
	let infx = $('#inp_val').val();
	let ans = await evaluate(infx);
	$('button').prop('disabled', true);
	$('.data').empty();
	$('#expn').empty();
	$('#expn').append('<div class="alert alert-info">Infix expression: '+infx+'</div>');
	$('#expn').append('<div class="alert alert-info">Result: '+ans+'</div>');
	
	$('button').prop('disabled', false);
}