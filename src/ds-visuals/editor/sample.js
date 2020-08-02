var level_wise_node_sum =
`//level-wise sum of nodes
arr1 = [10, 2, -3, 4, -5, 22, 12, 7];
console.log("Level wise sum of node in tree created using arr1: ");
tree = createBST(arr1);
levelWiseSum(tree);
function levelWiseSum(tree){
    let nodeCount = 0;
    let level = 0;
    let queue = createQueue([tree.root], 'data');
    while(!queue.isEmpty()){
        nodeCount = queue.length(); //the number of nodes in the level
        level += 1; //increment the level
        var currSum = 0; //initialise level sum to zero
        while(nodeCount > 0){//level order traversal
            node = dequeue(queue);
            currSum += node.data
            if(node.left !== null)
                enqueue(queue, node.left);
            if(node.right !== null)
                enqueue(queue, node.right);
            nodeCount--;
        }
        //print sum and level
        console.log(level, currSum);
    }
}`;

var reverse_a_string = 
`//reverse a string - this is a sample code
str = "reverse";
stack = createStack(['#']);
for(i = 0; i < str.length; i++)
    push(stack, str[i]);
val = pop(stack);
console.log('Before Reversal: '+str);
str = '';
while(val != '#'){
    str += val;
    val = pop(stack);
}
console.log('After Reversal: '+str);
`;

var stack_using_queues = 
`//stack using two queues
queue1 = createQueue([]);
queue2 = createQueue([]);
MAX = 7;
function stk_push(data){
    if(queue1.length() == MAX)
        console.error("Overflow")
    else
        enqueue(queue1, data);
}
function stk_pop(){
    let val = -1;
    if(queue1.isEmpty())
        console.error("Underflow");
    else{
        while(queue1.length > 1){
            val = dequeue(queue1);
            enqueue(queue2, val);
        }
        val = dequeue(queue1);
        let temp = queue1;
        queue1 = queue2;
        queue2 = temp;
    }
    return val;
}
stk_push(12);
console.log("popped element is: ",stk_pop());
stk_push(13);
stk_push(14);
stk_push(15);
console.log("popped element is: ",stk_pop());`;

var queue_using_stacks = `//queue using stacks
stack1 = createStack([]);
stack2 = createStack([]);
MAX = 7;
function enQ(data){
    if(stack1.length() == MAX)
        console.error("Overflow")
    else
        push(stack1, data);
}
function deQ(){
    let val = -1;
    if(stack1.isEmpty() && stack2.isEmpty())
        console.error("Underflow");
    else{
        if(stack2.isEmpty()){
            while(!stack1.isEmpty()){
                val = pop(stack1);
                push(stack2, val);
            }
        }
        val = pop(stack2);
    }
    return val;
}
enQ(12);
console.log("dequeued element is: ",deQ());
enQ(13);
enQ(14);
enQ(15);
console.log("dequeued element is: ",deQ());
console.log("dequeued element is: ",deQ());`;

var samples = [
	{
        name: "Level-wise sum of nodes in a tree", 
        code: level_wise_node_sum, 
        head:'Level-wise Sum Of Nodes in a Tree.',
        desp: `Given a Binary Search Tree, the task is to find the horizontal sum of the nodes that are in the same level.<br><br>
        <b>The algorithm is as follows:</b>
        <ul><li>starting from root enqueue nodes of the next level into the queue.</li>
        <li>While traversing each level add the values of the nodes.</li>
        <li>After completing each level output the value.</li></ul>`
    }, {
        name: "Reverse a string", 
        code: reverse_a_string,
        head:'Reverse a String using stack.', 
        desp:`Given a string reverse it using a stack.<br><br> 
        <b>The algorithm for string reversal is as follows: </b>
        <ul><li>Create an empty stack.</li><li>Push all the characters of the string into the stack one by one.</li>
        <li>Pop each charcter append it to a new string.</li></ul>`
    }, {
        name: "Stack implementation using queues", 
        code: stack_using_queues, 
        head:'Implementing stack using queues',
        desp: `Simulating the stack push pop operations using queue data-structure.<br><br>
        <b>The algorithm is as follows:(making the pop operation costly)</b>
        <ul><li>consider 2 empty queues, queue1 and queue2</li>
        <li>for push operation: select queue1(the queue having elements if both are not empty.) and enqueue element into that queue.</li>
        <li>for pop operation: select queue1(the queue having elements if both are not empty.) and dequeue element enqueue-ing into queue2(the empty queue) until there is one element in queue1.</li>
        <li>The last element in queue1 is the element to be popped. now for next operation the current queue2 becomes queue1.</li></ul>`
    },{
        name: "Queue implementation using stacks", 
        code: queue_using_stacks, 
        head:'Implementing queue using stacks',
        desp: `Simulating the queue enqueue, dequeue operations using stack data-structure.<br><br>
        <b>The algorithm is as follows:(making the dequeue operation costly)</b>
        <ol><li>consider 2 empty stacks, enq_stack and deq_stack</li>
        <li>for enqueue operation: select enq_stack and push element into that stack.</li>
        <li>for dequeue operation: select deq_stack and if it is not empty pop element from that stack.</li>
        <li>else pop elements from enq_stack and push it into the deq_stack until enq_stack is empty and go to step 3.</li></ol>`
    },{
        name: "Sort a stack", 
        code: `//sort stack in increasing order
stack = createStack([80, 9, 700, 40, 1, 5, 200]);
temp_stack = createStack([]);
while(!stack.isEmpty()){
    let val = pop(stack);
    while(!temp_stack.isEmpty() && temp_stack.peek() > val){
        push(stack, pop(temp_stack));
    }
   push(temp_stack, val);
}`, 
        head:'Sort a stack using additional stack',
        desp: `Obtaining a increasing ordered stack from bottom to top by using only one additional stack.<br><br>
        <b>The algorithm is as follows:</b>
        <ol><li>consider a stack main_stack which is to be sorted.</li>
        <li>consider a empty stack called temp_stack</li>
        <li>repeat until main_stack is empty</li>
        <ul><li>pop an element from the stack and store it as val</li>
        <li>repeat until element at top of temp_stack is less than val or until temp_stack is empty</li>
        <ul><li>pop an element from temp_stack and push it into main_stack.</li></ul>
        <li>now that the top element of temo_stack is less than val push val into temp_stack and go to step 3</li></ul></ol>`
    },{
        name: "Largest Rectangular Area in a Histogram", 
        code: `let hist = [6, 2, 5, 4, 5, 1, 6];
let stack = createStack([]);
let n = hist.length;
let max_area = 0;

let i=0;
while(i < n){
    if(stack.isEmpty() || hist[i] >= hist[stack.peek()])
        push(stack, i++);
    else
        max_area = Math.max(max_area, hist[pop(stack)] * (stack.isEmpty()? i: i - stack.peek() - 1));
}

while(!stack.isEmpty()){
   Math.max(max_area, hist[pop(stack)] * (stack.isEmpty()? i: i - stack.peek() - 1));
}

console.log(max_area);`, 
        head:'Largest Rectangular Area in a Histogram',
        desp: `Find the largest rectangular area possible in a given histogram where the largest rectangle can be made of a number of contiguous bars.<br><br>
        <b>The algorithm is as follows:</b>
        <ol><li>Create empty stack</li><li>if stack is empty or hist[i] is higher than top element of stack then push i to stack.</li>
        <li>else if the hist[i] is smaller than top of stack then keep popping stack until hist[i] is higher than top element of stack. now with the removed bar as the smallest bar calculate the area using the left index being the next element in stack and the right being the current index.</li></ol>`
    },
];

function setSample(i){
	if(i !== undefined){
	    document.getElementById('edit').contentWindow.editor.setValue(samples[i].code, 1);
        $('#intro-section #desp').html(samples[i].desp);
        $('#intro-section .head').html(samples[i].head);
        $('#intro-section').show();
    }
}

function setupSamples(){
    let n = samples.length;
    for(let i = 0; i < n; i++)
        $('#samp-list').append('<a class="dropdown-item" onclick="setSample('+i+')">'+samples[i].name+'</a>');
}