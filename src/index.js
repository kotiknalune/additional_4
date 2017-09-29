module.exports = function multiply(first, second) {
    first = a.split('').reverse();
	second = b.split('').reverse();
	var arr = [];

	for (var i = 0; i < a.length; i++) {
		for (var j = 0; j < b.length; j++) {
			if (!arr[i+j]) {
				arr[i+j] = 0;
			}
			arr[i+j] += a[i] * b[j]
		}
	}
	
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 9) {
			if (!arr[i+1]) {
				arr[i+1] = 0;
			}
			arr[i+1] += parseInt(arr[i] / 10);
			arr[i] = arr[i] % 10;
		}
	}

	var str = arr.reverse().join('');
	return str;
}
