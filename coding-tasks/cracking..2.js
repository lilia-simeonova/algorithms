"use strict";
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	add(value) {
		var node = new Node(value);
		if(this.length === 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
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

//-------------------------------------------------------------------------
//Write code to remove duplicates from an unsorted linked list.
//FOLLOW UP
//How would you solve this problem if a temporary buffer is not allowed?


function removeDuplicates(value) {
	var list = new LinkedList();
	list = value;
	var hashTable = new Array();
	var current = list.head;
	while(current) {
		if(hashTable[current.value] == true) {
			list.delete(current.value);
		} else {
			hashTable[current.value] = true;
		}
		current = current.next;
	}
	console.log(list);
}

//--------------------------------------------------------------------------------
//Implement an algorithm to find the nth to last element of a singly linked list

function nthToLast(linkedList, nth) {
	var list = new LinkedList();
	var index = 1;
	list = linkedList;
	var current = list.head;
	while(current) {
		if(index === list.length - nth + 1) {
			console.log(current.value);
			break;
		} else {
			index++;
			current = current.next;
		}
	}
}

//--------------------------------------------------------------------------------
// You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1’s digit is at the head of
// the list. Write a function that adds the two numbers and returns the sum as a linked
// list.
// EXAMPLE
// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8


function sumUp(list1, list2) {
	var number1 = 0;
	var number2 = 0;
	var current = list1.head;
	var current2 = list2.head;
	var i = 1, j = 1;
	while(current) {
		number1 = number1 + current.value*i;
		current = current.next;
		i *= 10;
	}
	while(current2) {
		number2 += current2.value * j;
		current2 = current2.next;
		j *= 10;
	}
	console.log(number1, number2);
	var sum = number1 + number2;
	//console.log(parseFloat(number1));
	var newList = new LinkedList();
	console.log(sum);
	while(sum > 1) {
		//console.log(sum%10);
		newList.add(sum%10);
		sum = parseInt(sum/10);
	}
	console.log(newList);
}
var list = new LinkedList();
var list2 = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list2.add(4);
list2.add(5);
list2.add(6);

sumUp(list,list2);

