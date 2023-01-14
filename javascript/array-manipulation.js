
function getElement(a, n, S)
{
	// Sort the array
	a.sort();

	var sum = 0;

	for (var i = 0; i < n; i++) {

		// If current element
		// satisfies the condition
		if (sum + (a[i] * (n - i)) == S)
			return a[i];
		sum += a[i];
	}

	// No element found
	return -1;
}

var S = 5;
var a = [ 1, 3, 2, 5, 8 ];
var n = a.length;
document.write(getElement(a, n, S));

