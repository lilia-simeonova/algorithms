function bubbleSort(arr) {
	for (i = 0; i < arr.length; i++) {
		for (j = i +1; j < arr.length; j++) {
			if (arr[i] > arr [j]) {
				var temp;
				temp = arr[i];
				arr[i] = arr [j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([5,4,3,7,3,9]));