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
			console.log(current.data);
			current = current.next;
		}
	}
}
var list = new LinkedList();
