"use strict"; 

function Node(data) {
	this.data = data;
	this.next = null;
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	insert(value) {
		var node = new Node(value);
		if(!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		return this.length++;
	}
	insertAfter(value, element) {
		var node = new Node(value);
		var current = this.head;
		var nextElem = current.next;

		while(current.next) {
			if(current.data === element) {
				current.next = node;
				node.next = nextElem;
			}
			current = current.next;
			nextElem = current.next;
		}
		if(current == this.tail && current.data === element) {
			this.tail.next = node;
			this.tail = node;
		}
		return this.length++;
	}
	delete(value) {
		var current = this.head.next;
		var previous = this.head;
		if(this.head == this.tail && this.head.data === value) {
			this.head = null;
			this.tail = null;
			return this.length = 0;
		}
		while(current) {
			if(previous.data === value) {
				this.head = current;
				return this.length --;
			}
			if(current.data === value) {
				previous.next = current.next;
				return this.length--;
			}
			current = current.next;
			previous = previous.next;
		}
	}
	print() {
		var current = this.head;
		while(current) {
			//console.log(current.next);
			console.log(current.data);
			current = current.next;
			//console.log(current);
		}
	}
	exist(value) {
		var ex = false;
		var current = this.head;
		while(current) {
			if(current.data === value) {
				ex = true;
			} 
			current = current.next;
		}
		return ex;
	}
}


class Adjusted extends LinkedList{
	constructor(value) {
		var node = new Node(value);
		super(value);
		this.head = node;
		this.tail = node;
		this.length = 1;
	}
	insert(value) {
		return super.insert(value);
	}
	print() {
		var current = this.head.next;
		while(current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

// var list = new Adjusted(2);
// list.insert(3);
// list.insert(4);
// list.print();

class Graph {
	constructor(){
		this.graph =  new Array();
	}
	insert(Adjusted) {
		this.graph.push(Adjusted);
	}
	print() {
		for(var i = 0; i < this.graph.length; i++) {
			console.log("Node ", i, " has links to:");
			this.graph[i].print();
		}
	}
	member(value) {
		var result = false;
		var element;
		var length = this.graph.length;
		var i = 0;
		while(i < length) {
			if(this.graph[i].exist(value)) {
				result = true; console.log('this element is here'); break;
			}
			i++;
		}
		if(!result) {
			console.log('this element is not here');
		}
		return result;
	}
	path(node1, node2) {
		var n1 = new Node(node1);
		var n2 = new Node(node2);
		for(var i = 0; i < this.graph.length; i++) {
			if(this.graph[i].head.data === n1.data) {
				if(this.graph[i].exist(n2.data)) {
					console.log(this.graph[i].exist(n2.data)); break;
				} else {
					var current = this.graph[i].head;
					while(current.next) {
						this.path(current.next.data, node2);
						current = current.next;
					}
				}
			}
		}
	}
	pathStack(node1, node2) {
		var n1 = new Node(node1);
		var n2 = new Node(node2);
		var haveNext = false;
		var stack = new Array();
		stack.push(n1);
		var temp;
		while(stack.length != 0) {
			temp = stack.pop();
			for(var i = 0; i < this.graph.length; i++) {
				if(this.graph[i].head.data === temp.data) {
					var current = this.graph[i].head;
					while (current) {
						if(current.data === n2.data) {
							return console.log('true'); 
						} else if(current.data === n1.data) {
							current = current.next;
						} else {
							stack.push(current);
							current = current.next;
						}
					}
				}
			}	
		}
	}
}

var ad0 = new Adjusted(0);
var ad1 = new Adjusted(1);
var ad2 = new Adjusted(2);
var ad3 = new Adjusted(3);
var ad4 = new Adjusted(4);
ad0.insert(1);
ad0.insert(2);

ad1.insert(2);

ad2.insert(3);

ad3.insert(4);


var g = new Graph();
g.insert(ad0);
g.insert(ad1);
g.insert(ad2);
g.insert(ad3);

//g.print();
g.pathStack(3,1);