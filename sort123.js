// learning sort algorithms


function bubble(value) {
	var array = new Array();
	array = value;
	var temp;
	for(var i = 0; i < array.length; i++) {
		for(var j = i+1; j < array.length; j++) {
			temp = array[i];
			if(temp > array[j]) {
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}
	console.log(array);
}


function insertion(value) {
	var array = new Array();
	array = value;
	for(var i = 1; i < array.length; i++) {
		var temp = array[i];
		for(var j = i - 1; j > 0 && array[j] > temp; j--) {
			array[j+1] = array[j];
		}
	array[j] = temp;
	}
	console.log(array);
}

function insertionSort(arr) {
	var temp;
	for(var i = 1; i < arr.length; i++) {
		temp = arr[i];
		for(var j = i - 1; j >= 0 && arr[j] > temp; j--) {
				arr[j+1] = arr[j];
				arr[j] = temp;
		}
	
	}
	console.log(arr);
}

insertionSort([90,56,4,8,4,2,3]);