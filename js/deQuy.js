/*
Xóa các phần tử trùng lặp trong mảng

input : arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c']
output : ['a', 'b', 'c', 'd']

*/


var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c']

console.log([...(new Set(arr))]);
var result = []
