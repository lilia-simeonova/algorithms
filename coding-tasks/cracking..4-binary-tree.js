"use strict";

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Binary {
	constructor() {
		this.root = null;
	}
	add(value) {
		var node = new Node(value);
		var current = this.root;
		if(this.root == null) {
				this.root = node;
				return;
		};
		while(current) {
			if(value < current.value) {
				if(current.left == null) {
					current.left = node;
					return;
				} else {
					current = current.left;
				}
			} else {
				if(current.right == null) {
					current.right = node;
					return;
				} else {
					current = current.right;
				}
			}
		}
	}
}
var tree = new Binary();
tree.add(3);
tree.add(2);
tree.add(4);
tree.add(5);

tree.add(6);

// tree.add(8);


//console.log(tree.root.right);

function inOrder(tree) {

	// console.log("tree:",tree,'\n');
	//console.log("root:",tree.value,'\n');
	// console.log("left:",tree.left,'\n');
	// console.log("right:",tree.right,'\n');
	var current = tree;
	//console.log(current);
	if(current) {
		inOrder(current.right);
		console.log(current.value);
		inOrder(current.left);
	}
}


//--------------------------------------------------------------------
//Implement a function to check if a tree is balanced. For the purposes of this question,
// a balanced tree is de!ned to be a tree such that no two leaf nodes di#er in distance
// from the root by more than one.
//inOrder(tree.root);

function isBalanced(tree) {
	var current = tree;
	if(current.left != null) {
		if(current.right == null) {
			if(current.left.left || current.left.right) {
				console.log('not balanced');
				return;
			}
		} else {
			isBalanced(current.left);
		}
	}
	if(current.right != null) {
		if(current.left == null) {
			if(current.right.left || current.right.right) {
				console.log('not balanced');
				return;
			}
		} else {
			isBalanced(current.right);
		}
	}
}

function minDepth(tree) {
	if(tree == null) {
		return 0;
	}
	var sum = 1 + Math.min(minDepth(tree.left), minDepth(tree.right));
	console.log(sum);
	return sum;
}
//isBalanced(tree.root);

minDepth(tree.root);