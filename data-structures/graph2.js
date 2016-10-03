'use strict';
class Node {
	constructor(id, weight) {
		this.id = id;
		this.weight = weight;
		this.next = null;
	}
}
class LinkedList {
	constructor(head){
		this.head = head;
		this.tail = head;
		this.length = 1;
	}
	insert(id, weight) {
		var node = new Node(id, weight);
		if(this.head == null) {
			this.head = node;
			this.tail = node;
			//this.length++;
		} else {
			this.tail.next = node;
			this.tail = node;
			}
		this.length++;
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
	}
	add(List) {
		this.graph.push(List);
	}
	print() {
		for(var i = 0; i < this.graph.length; i++) {
			console.log("Adj list ",this.graph[i].head.id, "is: ", this.graph[i]);
		}
	}
}

// function dfs(graph,a,b) {
// 	var gr = new Graph();
// 	gr = graph;
// 	var g = gr.graph;
// 	var n1 = new Node(a,0);
// 	var n2 = new Node(b,0);
// 	var stack = new Array();
// 	stack.push(n1);
// 	var temp;
// 	while(stack.length != 0) {
// 		temp = stack.pop();
// 		for(var i = 0; i < g.length; i++) {
// 			if(g[i].head.id == temp.id) {
// 				var current = g[i].head;
// 				while(current) {
// 					if(current.id == n2.id) {
// 						console.log('yessss');
// 						return true;
// 					} else {
// 						stack.push(current);
// 						current = current.next;
// 					}
// 				}
// 			}
// 			else {
// 				return false;
// 			} 
// 		}
// 	}
	
// }

function bfs(graph, a, b) {
	var g = new Graph();
	g = graph.graph;
	
}


var l0 = new Node(0,0);
var l1 = new Node(1,0);
var l2 = new Node(2,0);

var list0 = new LinkedList(l0);
var list1 = new LinkedList(l1);
var list2 = new LinkedList(l2);



list0.insert(1,4);
list0.insert(2,3);
list1.insert(2,3);

var graph = new Graph();

graph.add(list0);
graph.add(list1);
graph.add(list2);
//console.log(list);
//graph.print();
bfs(graph,0,5);