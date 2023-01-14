
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



function arrayManipulation(n, queries){
    let arr = Array(n+2).fill(0)

    for( let i =0 ; i < queries.length; i++ ){
        let [a,b,k] = queries[i]

        arr[a] += k
        arr[b+1] -=k 
    }
    let max = Number.MIN_VALUE
    let sum = 0

    for(let i = 0; i<arr.length; i++){
        sum +=arr[i]
        max = Math.max(max.sum)
    }
    return max
}

