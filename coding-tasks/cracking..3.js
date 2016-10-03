"use strict"

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Stack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
		//this.min = 0;
		//this.lmin = 0;
	}
	pushi(value) {
		var node = new Node(value);
		if(this.length === 0) {
			this.head = node;
			this.tail = node;
		//	this.min = node.value;
		//	this.lmin = node.value;
		} else {
			// if(value < this.min) {
			// 	this.lmin = this.min;
			// 	this.min = value;
			// } 
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	}
	popi() {
		var current = this.head;

		while(current) {
			if(this.length === 1) {
				this.head = null;
				this.tail = null;
				this.length = 0;
				return current;
			} else if(current.next == this.tail) {
				// if(current.next.value = this.min) {
				// 	this.min = this.lmin;
				// }
				var pop = current.next;
				this.tail = current;
				current.next = null;
				this.length--;
				return pop;
			}
			current = current.next;
		}
	}
	peek() {
		return this.tail;
	}
	mini() {
		console.log(this.min);
		return this.min;
	}
	print() {
		var current = this.head;
		while(current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

//----------------------------------------------------------------------
///1 Describe how you could use a single array to implement three stacks

class strangeStack {
	constructor(n) {
		this.array = new Array();
		this.array.length = n;
		this.index1 = 0;
		this.index2 = parseInt(this.array.length/3);
		this.index3 = parseInt((2*this.array.length)/3);
	}
	push(stackNumber, value) {
		if(stackNumber === 1) {
			this.array[this.index1] = value;
			this.index1++;
		} else if(stackNumber === 2) {
			this.array[this.index2] = value;
			this.index2++;
		} else {
			this.array[this.index3] = value;
			this.index3++;
		}
	}
	pop(stackNumber) {
		if(stackNumber === 1) {
			this.array[this.index1] = null;
			this.index1--;
		} else if(stackNumber === 2) {
			this.array[this.index2] = null;
			this.index2--;
		} else {
			this.array[this.index3] = null;
			this.index3--;
		}
	}
}

//--------------------------------------------------------------------------------------------
//How would you design a stack which, in addition to push and pop, also has a function
//min which returns the minimum element? Push, pop and min should all operate in
//O(1) time.

//check the method min the descriebed stack above

//---------------------------------------------------------------------------------------------
///Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
//in real life, we would likely start a new stack when the previous stack exceeds
//some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks
//should be composed of several stacks, and should create a new stack once
//.the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
//behave identically to a single stack (that is, pop() should return the same values as it
//would if there were just a single stack).
//FOLLOW UP
//Implement a function popAt(int index) which performs a pop operation on a specific
//sub-stack.

class SetOfStacks {
	constructor(threshold) {
		this.set = new Array();
		this.initialStack = new Stack();
		this.set.push(this.initialStack);
		this.threshold = threshold;
		this.length = this.set.length;
	}
	myPush(value) {
		var currentStack = this.set[this.set.length - 1];
		var newStack = new Stack();
			if(currentStack.length >= this.threshold) {
				newStack.push(value);
				this.set.push(newStack);
			} else {
				//console.log('I am heree');
				currentStack.push(value);
			}
	}
	myPop() {
		var lastStack = this.set.pop();
		//console.log(lastStack);
		var elemenent;

		if(lastStack.length === 1){
			elemenent = lastStack.pop();
			//this.set.pop();
		} else {
			elemenent = lastStack.pop();
			this.set.push(lastStack);
		}
	return elemenent;
	}
	popAt(index) {

	}
}


//-----------------------------------------------------------------------------------------
//4 In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of different
//sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending
//order of size from top to bottom (e.g., each disk sits on top of an even larger one). You
//have the following constraints:
//(A) Only one disk can be moved at a time.
//(B) A disk is slid off the top of one rod onto the next rod.
//(C) A disk can only be placed on top of a larger disk.
//Write a program to move the disks from the first rod to the last using Stacks





//------------------------------------------------------------------------------------------
//Implement a MyQueue class which implements a queue using two stacks.


class MyQueue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}
	myPush1(value) {
		this.stack1.pushi(value);
		//console.log(this.stack1);
	}
	myPop1() {
		//var temp;
		//console.log("stack 1 at the beginning:",this.stack1);

		while(this.stack1.length != 0) {
			var temp  = this.stack1.popi().value;
			//console.log("temp:",temp);
			this.stack2.pushi(temp);
			//console.log(this.stack2);
		}
		this.stack2.popi();
		while(this.stack2.length != 0) {
			var temp2 = this.stack2.popi().value;
			this.stack1.pushi(temp2);
			//console.log(this.stack1);
		}
	}
	print() {
		this.stack1.print();
	}
}


var queue1 = new MyQueue();
queue1.myPush1(1);
queue1.myPush1(2);
queue1.myPush1(3);
queue1.myPush1(4);

queue1.myPop1();

//console.log(queue1.stack1);
//queue1.stack1.print();

//----------------------------------------------------------------------------------------
// Write a program to sort a stack in ascending order. You should not make any assumptions
// about how the stack is implemented. The following are the only functions that
// should be used to write this program: push | pop | peek | isEmpty.


function sortStack(stack) {
 	var stack2 = new Stack();
 	while(stack.length != 0) {
 		var temp = stack.popi().value;

 		while( stack2.peek() > temp && stack2.length != 0) {
 			stack.pushi(stack2.popi());
 		}
 		stack2.pushi(temp);
 	}
 	console.log(stack2);
 	console.log(stack2.print());
 	return stack2;
}

var stack = new Stack();

stack.pushi(5);
stack.pushi(7);
stack.pushi(1);

sortStack(stack);