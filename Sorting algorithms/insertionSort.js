function insertionSort(arr) {
	var temp;
	for(var i = 1; i < arr.length; i++) {
		temp = arr[i];
		for(var j = i - 1; j > 0 && arr[j] > temp; j--) {
				arr[j+1] = arr[j];
		}
	arr[j] = temp;
	}
	return arr;
}