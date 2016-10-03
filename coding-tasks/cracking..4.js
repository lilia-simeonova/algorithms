"use strict";

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		var node = new Node(value);
		this.head = node;
		this.tail = node;
		this.length = 1;
	}
	add(value) {
		var node = new Node(value);
		this.tail.next = node;
		this.tail = node;
		this.length++;
	}
	delete(value) {
		var current = this.head;
		if(this.length === 1 && this.head.value === value) {
			this.length--;
			return null;	
		} else {
			while(current) {
				if(current.next.value === value) {
					current.next = current.next.next;
					this.length--;
					break;
				} else {
				current = current.next; 
				}
			}
		}
	}
	print() {
		var current = this.head;
		while(current) {
			console.log(current);
			current = current.next;
		}
	}
}


class Graph {
	constructor() {
		this.graph = new Array();
		this.length = 0;
	}
	add(value) {
		this.graph.push(value);
		this.length++;
	}
	print() {
		for(var i = 0; i < this.graph.length; i++) {
			
		}
	}
}

// var l1 = new LinkedList(1);
// var l2 = new LinkedList(2);
// var l3 = new LinkedList(3);
// var l4 = new LinkedList(4);

// l1.add(2);
// l1.add(3);
// l2.add(3);
// l2.add(4);
// //l3.add(4);

// var graph = new Graph();
// graph.add(l1);
// graph.add(l2);
// graph.add(l3);
// graph.add(l4);

console.log(graph.graph[0]);
function dfs(g, value1, value2) {
	var stack = new Array();
	var graph = g.graph;
	console.log(graph);
	stack.push(value1);
	while (stack.length != 0) {
		var temp = stack.pop();
		//console.log(temp);
		for(var i = 0; i < graph.length; i++) {
			//console.log(graph.value);
			if(graph[i].value.head.value === temp) {
				console.log("temp:", temp);
				var current = graph[i].value.head;
				while(current && current.value != value1) {
					if(current.value === value2) {
						console.log('there is a path there');
						return;
					} else {
						stack.push(current);
						current = current.next;
					}
				}
			}
		}
		console.log('there is no path');
	}
}

//dfs(graph,1,4);

