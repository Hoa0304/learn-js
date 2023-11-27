// number type
var x = 1;
var y = 2;
var z = 3;

//String type
var fullName = 'Cam Hoa';

// Boolean type
var isBoolean = true;

// Undefined type
var isUndefined ;

//null type
var isNull = null;

// Symbol type
var isSymbol = Symbol('isSymbol'); //unique

function hello(name){
    console.log('Hello '+name);
}
hello('Dat');
hello('Man');

//------------giá trị trả về---------
function add(a,b){
    return a+b;
}

var result = add(10,19);
console.log('Result: '+ result);//20

//--------------Khai báo hàm như một biến--------------------
var bye = function ( name ){
    return 'Bye '  + name;
};
console.log(bye('Hoa'));// Bye Hoa

// Object type
var myObj = {
    name: 'Cam Hoa',
    address: 'Da Nang',
    age: 10,
};

var myArray = [
    'Hello',
    'Dat',
    'Man',
];

var a = '1';
var b = 2;

var c = typeof a;
var d = typeof b;
var e = typeof d;

console.log(c, d, e) // Output: string, number, string
