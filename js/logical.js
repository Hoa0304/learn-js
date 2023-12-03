var a = true;
var b = false;
var c = a || b;
var d = b && c;

console.log(c, d); // Output: true false


var result = 'A' && 'B' && 'C' && 'D' && 'E' && NaN
console.log(result);


if (result) {
    console.log('error');
} else {
    console.log('success');
}