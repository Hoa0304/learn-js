/*
Xóa các phần tử trùng lặp trong mảng

input : arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c']
output : ['a', 'b', 'c', 'd']

*/


var arr = ['a', 'b', 'c', 'd', 'a', 'a', 'c']

console.log([...(new Set(arr))]);
var result = []

// Khong su dung cac ham co san trong js

function loop(start, end, callback) {
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result;
}



//------------------------------------------------------------------------------
function countDown(num) {
    if (num > 0) {
        return countDown(num - 1)
    }
    return num;
}

countDown(2);
