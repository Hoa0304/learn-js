var fullName = 'Trần Thị Cẩm Hoa';
// = toán tử gán

var a = 1;
var b = 2;

if(a == b) {
    alert('Error')
}

var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3


var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3


var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3


var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3


//--------------------------------------------

console.log('--- Hậu tố ---');

var number1 = 1;

console.log(number1++); // 1
console.log(number1); // 2

console.log(number1++); // 2
console.log(number1); // 3

console.log('--- Tiền tố ---');

var number2 = 1;

console.log(++number2); // 2
console.log(number2); // 2

console.log(++number2); // 3
console.log(number2); // 3

// Toán tử -- tương tự các bạn nhé, điểm khác
// là thay vì cộng 1 trừ toán tử -- sẽ trừ 1

var a = 1;
var b = ++a * a--;

console.log(b); // Output: 4


var lastName = 'Cam';
var firstName = ' Hoa';
var fullName = firstName + lastName;

console.log(fullName) // Output: Cam Hoa
