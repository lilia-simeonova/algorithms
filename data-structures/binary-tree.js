"use strict";

class Node {
	constructor(root) {
		this.node = root;
		this.left = null;
		this.right = null;	
	}
}

class Tree {
	constructor() {
		this.root = null;
	}
	add(parent,child) {
		var parent = new Node(parent);
		var child = new Node(child);
			if(this.root == null) {
				this.root == parent;
			}
		var current = this.root;
		while(current) {
			if(current.node == parent.node) {
				if(current.left == null) {
					current.left = child;
				} else if(current.right == null) {
					current.right = child;
				} else {
					current = 
			}
		} }
		
				if(this.tree[i].left == null) {
					//console.log("my child should be 1:",child);
					this.tree[i].left = child;
					this.tree.push(child);
				} else if(this.tree[i].right == null) {
					this.tree[i].right = child;
					this.tree.push(child);
				} else {
					console.log('Can not add child here');
					return false;
				}
			}
		}
	// maxDepth() {
	// 	// using DFS
	// 	var queue = new Array();
	// 	var max = new Array();
	// 	var count = 0;
	// 	queue.push(this.tree[0]);
	// 	while(queue.length != 0) {
	// 		var temp = queue.pop();
	// 		//console.log(temp);
	// 			if(temp.left == null && temp.right == null) {
	// 				max.push(count);
	// 			} else if(temp.left == null && temp.right) {
	// 				queue.push(temp.right);
	// 				count++;
	// 			} else if(temp.left && temp.right == null){
	// 				queue.push(temp.left);
	// 				count++;
	// 			} else {
	// 				queue.push(temp.left);
	// 				queue.push(temp.right);
	// 				count++;
	// 			}

	// 		}
	// 	console.log(max);

	// 	return Math.max(max);
	// }
	maxDepthRecursion(this.tree[0]) {
		var l = maxDepthRecursion(this.tree.left)
	}
	print() {
		for(var i = 0; i < this.tree.length; i++) {
			console.log(this.tree[i]);
		}
	}
}

var tree = new Tree(0);

// var node = new Node(1);
// var node = new Node(2);
// var node = new Node(3);
// var node = new Node(4);
// var node = new Node(5);

tree.add(0,1);
tree.add(0,2);
tree.add(2,9);
tree.add(1,5);
tree.add(1,3);
tree.add(3,12);
tree.add(12,4);

//tree.add(0,98);

//console.log(tree);
tree.maxDepth();