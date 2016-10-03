
function fibb(a) {
	if(a === 0) return 0;
	if(a === 1) return 1;

	if(a > 2) {
		return fibb(a-1) + fibb(a-2);
	}
	
}
function calc() {
	var b = 1, sum;
	
	while(b < 4000000) {
		var f = fibb(b);
		if(f%2 === 0) {
			sum += f;
		}
		b++;
	}
	console.log(sum);
	return sum;
}

// function getMil(b) {
// 	if(b > 4 000 000) {

// 	}
// }

console.log(calc());