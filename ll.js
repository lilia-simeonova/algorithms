"use strict";
class Node {
	constructor(){
		this.value = 0;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	insertAtTail(value) {
		var node = new Node();
		node.value = value;
		if(this.length === 0) {
			this.head = node;
			this.tail = node;			
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	}
	insertAtHead(value) {
		var node = new Node();
		node.value = value;
		if(this.length === 0) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
	}
	print() {
		var current = this.head;
		while(current) {
			console.log(current);
			current = current.next;
		}
	}
	printHead(){
		console.log("The head is:",this.head.value);
	}
}

var list = new LinkedList();
list.insertAtTail(2);
list.insertAtTail(3);
list.printHead();
list.insertAtHead(1);
list.printHead();
list.print();