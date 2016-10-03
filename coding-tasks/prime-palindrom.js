function isPrime(x){
	var value;
	for(var i = x-1; i > 1; i--) {
		if(x%i == 0) {
			//console.log('false');
			return value = false;
		}
		else {
			value=true;
		}
	}
	return value;
}
function palindrom(number) {
	var initialNumber = number;
	var str='', reverseNumber;
	while(number>0){
		var a = Number(number)%10;
		var b = a.toString();
		str = str + b;
		number = Math.floor(number/10);
	}
	reverseNumber = Number(str);
	if(reverseNumber === initialNumber) {
		return true;
	} else {
		return false;
	}
}

function largestPalindorm(number) {
	while(number>0) {
		if(isPrime(number) && palindrom(number)) {
			return number;
		}
		number--;
	}
}

console.log(largestPalindorm(1000));