var arr1 = ['a', 'b', 'c', 'd'];

var arr2 = ['e', 'f', 'g', 'h'];

var arr3 = [...arr1, ...arr2];

console.log(arr3);

/*
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g', 'h'
]
*/ 

var obj1 = {
    a: 1,
    b: 2,
    c: 3
}

var obj2 = {
    d: 4,
    e: 5,
    f: 6
}

var obj3 = {
  ...obj1,
  ...obj2
}

console.log(obj3);

//{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }