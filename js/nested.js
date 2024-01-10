var myArray =[
    [1,2],
    [3,4],
    [5,6]
]

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
    console.log(myArray[i])
}
// 1
// 2
// [ 1, 2 ]
// 3
// 4
// [ 3, 4 ]
// 5
// 6
// [ 5, 6 ]
