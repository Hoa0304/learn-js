//---------for------------

for (var i = 1; i < 1000; i++) {
    console.log(i)
}

// Làm bài
function getRandNumbers(min,max,length) {
    var result = [
    ];

    for(var i = min; i<length; i++) {
        result[i] = Math.random() * (max - min) + min
    }
    return result
}

/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */

function getTotal(arr) {
    return arr.reduce((total, cValue) => total + cValue, 0)
}


function getTotal(arr) {
    var c = 0;
    for( var i = 0; i<arr.length; i++) {
        c += arr[i];
    }
    return c;
}

var arr = [
    'a', 'b', 'c', 'd'
]

var arrayLength = arr.length

for( var i = 0; i < arrayLength; i) {

}