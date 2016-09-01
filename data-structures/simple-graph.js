"use strict";

function Node(id, weight, next) {
	this.id = id;
	this.weight = weight;
	this.next = next;
}

class Graph {
	constructor() {
		this.graph = new Array();
		this.length = 0;
	}
	add(id, weight, next) {
		var node = new Node(id, weight, next);
		if(this.length === 0) {
			this.graph.push(node);
			this.length++;
		} else {
			for(var i = 0; i < this.graph[length - 1]; i++) {
				if(this.graph[i].id === next) {
					
				}
			}
			this.graph[this.length - 1].next = next;
			this.graph.push(node);
			this.length++;
		}
	}
	print() {
		for(var i = 0; i < this.graph.length; i++) {
			console.log("Node",i, "is: ", this.graph[i].id, this.graph[i].weight, this.graph[i].next);
		}
	}
}

var g = new Graph();

g.add(1,4);
g.add(2,5);
g.add(3,5);
g.print();