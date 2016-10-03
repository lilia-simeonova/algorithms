var string = "abcaabf";
var length = string.length;
var n = 0;
var stack = [];
function exist(value, stack) {
	for(var i in stack) {
		if(stack[i] === value) {
			return true;
		}
	}
}

//---------------------------------------------------------------------------------------
// Implement an algorithm to determine if a string has all unique characters. What if you
// can not use additional data structures?

function checkValues(string) {
	for(var i = 0; i < string.length; i++) {
		for(var j = i + 1; j < string.length; j++) {
			if(string[i] === string[j]) {
				console.log("char found 2 times");
				return;
			}
		}
	}
}

function checkValuesBool(string) {
	var boolean = new Array();
	for(var i = 0; i < string.length; i++) {
		var temp = string[i];
		if(boolean[temp] == true) {
			console.log('char found 2 times');
			return;
		} else {
			boolean[temp] = true;
		}
	}
}

//--------------------------------------------------------------------------------------
// Write code to reverse a C-Style String. (C-String means that “abcd” is represented as
// five characters, including the null character.)

function reverseCString(string) {
	var temp;
	var string2 = string.split('');
	for(var i = 0; i < (string2.length-1)/2; i++) {
		temp = string2[i];
		string2[i] = string2[string2.length - 2 - i];
		console.log(string2[i]);
		string2[string2.length - 2 - i] = temp;
	}
	console.log(string2.join(''));
	return string2.join('');
}

//-------------------------------------------------------------------------------------
// Design an algorithm and write code to remove the duplicate characters in a string
// without using any additional buffer. NOTE: One or two additional variables are fine.
// An extra copy of the array is not.
// FOLLOW UP
// Write the test cases for this method.

function removeDuplicates(value) {
	var string = value.split('');
	for(var i = 0; i < string.length; i++) {
		for(var j = i+1; j < string.length; j++) {
			if(string[i] === string[j]) {
				var head = string.slice(0,j);
				var tail = string.slice(j+1);
				string = head.concat(tail);
				j = j - 1;
			}
		}
	}
	console.log(string.join(''));
	return 0;
}

//-------------------------------------------------------------------------------------
//Write a method to decide if two strings are anagrams or not.

function anagrams(string1, string2) {
	if(string1.length != string2.length) {
		console.log('not anagrams');
		return;
	}
	for(var i = 0, j = 0; i < string1.length, j < string2.length; i++, j++) {
		if(exist(string1[i],string2) != true || exist(string2[j],string1) != true) {
			console.log('not anagrams');
			return;
		}
	}
	console.log('anagrams');
	return true;
}
var string = "abababa";

//--------------------------------------------------------------------------------------
//Write a method to replace all spaces in a string with ‘%20’.

function replaceSpaces(value) {
	var string = value.split('');
	for(var i = 0; i < string.length; i++) {
		if(string[i] == " ") {
			string[i] = '%20';
		}
	}
	//string.join('');
	console.log(string.join(''));
}

//-------------------------------------------------------------------------------------
//Given an image represented by an NxN matrix, where each pixel in the image is 4
//bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotate(matrix) {
	for(var i = 0; i < matrix.length; i++) {
		console.log(matrix[i]);
		// for(var j = 0; j < matrix.length; j++) {
		// 	console.log(matrix[i][j]);
		// }
	}
}

var matrix = new Array();
var matrix = [['.','.','*'],['.','*','.'],['*','.','.']];
rotate(matrix);