"use strict";

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor() {
		this.depth = 0;
		this.root = null;
	}
	add(value) {
		var node = new Node(value);
		var current = this.root;
		if(this.depth === 0) {
			this.root = node;
			this.depth++;
		} else {
		while(true) {
			if(value < current.value) { 
				if(current.left == null) {
					current.left = node;
					this.depth++;
					break;
				} else {
					current = current.left;
				}
				
			} else {
				if(current.right == null) {
					current.right = node;
					this.depth++;
					break;
				} else {
					current = current.right;
				}
			}

		} }

	}
	// inOrderTraverse(node) {
	// 	//var node = new Node(value);
	// 	console.log(node);
	// 	if(node.value == null) {
	// 		return;
	// 	}
	// 	this.inOrderTraverse(node.left);
	// 	console.log("lili",node.value);
	// 	this.inOrderTraverse(node.right);
	// }
	print() {
			console.log(this.root);
	}
}

function inOrderTraverse(tree) {
	//var tree = new Tree();

	//console.log(tree.root);
	if(tree.root.value == null) {
		return;
	} else {
		console.log(tree.left.root);
	}
	// inOrderTraverse(tree.left);
	
	 // console.log(tree.root.value);
	//inOrderTraverse(tree.right.root.value);
}
var tree = new Tree();
//var node = new Node(1);
tree.add(1);
tree.add(2);
tree.add(5);
tree.add(3);

inOrderTraverse(tree);