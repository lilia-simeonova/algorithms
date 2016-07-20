function selectionSort(arr) {
	var min;
	for(var i = 0; i < arr.length; i++) {
		for(var j = i + 1; j < arr.length; j++) {
			min = arr[i];
			if (min > arr[j]){
				arr[i] = arr[j];
				arr[j] = min;
			}
		}
	}
	return arr;
}