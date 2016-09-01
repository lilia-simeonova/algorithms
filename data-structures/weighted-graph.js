"use strict"; 

function Node(data, weight) {
	this.data = data;
	this.weight = weight;
	this.next = null;
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	insert(value, weight) {
		var node = new Node(value, weight);
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
		var node = new Node(value, weight);
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
		var weight;
		var current = this.head;
		while(current) {
			if(current.data === value) {
				ex = true;
				weight = current.weight;
			} 
			current = current.next;
		}
		//console.log(ex);
		return [ex, weight];
	}
}


class Adjusted extends LinkedList{
	constructor(value, weight) {
		var node = new Node(value, weight);
		super(value, weight);
		this.head = node;
		this.tail = node;
		this.length = 1;
	}
	insert(value, weight) {
		return super.insert(value, weight);
	}
	print() {
		var current = this.head.next;
		while(current) {
			console.log("The weight between:", this.head.data,"and ", current.data, " is: ", current.weight);
			current = current.next;
		}
	}
}

// var list = new Adjusted(2, 0);
// list.insert(3, 2);
// list.insert(4, 4);
// //list.print();
// list.exist(3);
function qNode(key, priority) {
	this.key = key;
	this.priority = priority;
}
class priorityQueue {
	constructor(){
		this.queue = [];
	}
	enqueue(id, priority) {
		var node = new qNode(id, priority);
		this.queue.push(node);
		this.queue.sort(function(a,b) { return a.priority - b.priority;});
	}
	update(id, priority) {
		for(var i = 0; i < this.queue.length; i++) {
			if(this.queue[i].key === id) {
				this.queue[i].priority = priority;
			}
		}
	}
	dequeue() {
		return this.queue.shift();
	}
	exist(id) {
		for(var i = 0; i < this.queue.length; i++) {
			if(this.queue[i].key === id) {
				return true;
			}
		}
	}
	print() {
		for(var i = 0; i < this.queue.length; i++) {
			console.log(this.queue[i],"--");
		}
	}
	length() {
		return this.queue.length;
	}
}

class Graph {
	constructor(){
		this.graph =  new Array();
		this.sum = 0;
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
		var n1 = new Node(node1, 0);
		var n2 = new Node(node2, 0);
		for(var i = 0; i < this.graph.length; i++) {
			if(this.graph[i].head.data === n1.data) {
				var result = this.graph[i].exist(n2.data);
				if(result[0]) {
					console.log('we found the element');
					this.sum = this.sum + result[1];
					console.log("The sum is:", this.sum); break;
					//console.log(this.graph[i].exist(n2.data)); break;
				} else {
					var current = this.graph[i].head.next;
					console.log(current);
					while(current) {
						this.sum = this.sum + current.weight;
						//console.log("The weight of current element is:", current.weight);
						//console.log(this.sum);
						this.path(current.data, node2);
						current = current.next;

					}
				}
			}
		}
	}

	dijkstra(node1, node2) {
		var n1 = new Node(node1, 0);
		var n2 = new Node(node2, 0);
		var undiscovered = new priorityQueue();
		var previous = new Array();
		var distance = new Array();
		var path = new Array();
		var sum = 0, alt;
		var adjusted, smallest, finalDistance;
		for(var vertex in this.graph) {
			if(this.graph[vertex].head.data === n1.data) {
				distance[vertex] = 0;
				undiscovered.enqueue(this.graph[vertex].head.data,0);
			} else {
				distance[vertex] = 100000;
				//undiscovered.enqueue(this.graph[vertex].head.data,100000);
			}
			previous[vertex] = null;
		}
		var len = undiscovered.length();
		while(len != 0) {
			smallest = undiscovered.dequeue();
			for(var i = 0; i < this.graph.length; i++) {
				adjusted = this.graph[i];
				if(adjusted.head.data === smallest.key) {
					var current = adjusted.head;
					while (current) {
						if(current.data === smallest.key) {
							current = current.next;
						}
						if(current.data === n2.data) {
							previous[current.data - 1] = smallest.key;
							finalDistance = distance[smallest.key-1] + current.weight;
							path.push(previous[current.data-1]);
							while(previous[smallest.key - 1]) {
         						path.push(previous[smallest.key - 1]);
          						smallest.key = previous[smallest.key - 1];
        					}
       						previous[current.data - 1] = smallest.key;
       						return console.log('Final distance: ', finalDistance, 'From path: ', path);
        				}
						else {
							alt = distance[smallest.key-1] + current.weight;
							if(alt < distance[current.data - 1]) {
									distance[current.data - 1] = alt;
									previous[current.data - 1] = smallest.key;
								}	
							if(undiscovered.exist(current.data)) {
								undiscovered.update(current.data, alt);
							} else {
								undiscovered.enqueue(current.data, alt);
							}	
						current = current.next;
						}
					}
				}
			}
		}
	}
	// pathBFS(node1, node2) {
	// 	var n1 = new Node(node1);
	// 	var n2 = new Node(node2);
	// 	var haveNext = false;
	// 	var stack = new Array();
	// 	stack.push(n1);
	// 	var temp;
	// 	while(stack.length != 0) {
	// 		temp = stack.shift();
	// 		for(var i = 0; i < this.graph.length; i++) {
	// 			if(this.graph[i].head.data === temp.data) {
	// 				var current = this.graph[i].head;
	// 				while (current) {
	// 					if(current.data === n2.data) {
	// 						return console.log('true'); 
	// 					} else if(current.data === n1.data) {
	// 						current = current.next;
	// 					} else {
	// 						stack.push(current);
	// 						current = current.next;
	// 					}
	// 				}
	// 			}
	// 		}	
	// 	}
	// }
}

var ad1 = new Adjusted(1,0);
var ad2 = new Adjusted(2,0);
var ad3 = new Adjusted(3,0);
var ad4 = new Adjusted(4,0);
var ad5 = new Adjusted(5,0);


ad1.insert(2,2);
ad1.insert(3,3);
//ad1.insert(4,1);

ad2.insert(4,4);

ad3.insert(4,2);
ad4.insert(5,2);

var g = new Graph();
//g.insert(ad0);
g.insert(ad1);
g.insert(ad2);
g.insert(ad3);
g.insert(ad4);
g.insert(ad5);

//g.print();
//console.log(ad0);
//g.path(1,4)
g.dijkstra(1,4);