var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,

    },
    {
        id: 2,
        name: 'Python',
        coin: 100,

    },
    {
        id: 3,
        name: 'C++',
        coin: 50,

    },
    {
        id: 4,
        name: 'Java',
        coin: 100,

    },
    {
        id: 5,
        name: 'C#',
        coin: 200,

    }
];

// cach thuong
var totalCoins= 0;
for (var coin of course) {
    totalCoins += course.coin
}

console.log(totalCoins)

var i=0
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i ++
    console.table({
        'Luot chay: ' : i,
        'Bien tich tru: ' : accumulator

    })

    console.log(currentValue)

    return accumulator + currentValue.coin;
}

var totalCoins = course.reduce(coinHandler, 0)

console.log(totalCoins)
/* so 0 duoc gan cho accumulator
 cho so 0 minh de so nao thi accumulator se la so do
 con lai thi all accumulator se bang undefined
 chi can return se dinh nghia duoc accumulator cua lan chay so 2

 NaN
┌─────────────────┬────────┐
│     (index)     │ Values │
├─────────────────┼────────┤
│   Luot chay:    │   1    │
│ Bien tich tru:  │   0    │
└─────────────────┴────────┘
{ id: 1, name: 'Javascript', coin: 250 }
┌─────────────────┬────────┐
│     (index)     │ Values │
├─────────────────┼────────┤
│   Luot chay:    │   2    │
│ Bien tich tru:  │  250   │
└─────────────────┴────────┘
{ id: 2, name: 'Python', coin: 100 }
┌─────────────────┬────────┐
│     (index)     │ Values │
├─────────────────┼────────┤
│   Luot chay:    │   3    │
│ Bien tich tru:  │  350   │
└─────────────────┴────────┘
{ id: 3, name: 'C++', coin: 50 }
┌─────────────────┬────────┐
│     (index)     │ Values │
├─────────────────┼────────┤
│   Luot chay:    │   4    │
│ Bien tich tru:  │  400   │
└─────────────────┴────────┘
{ id: 4, name: 'Java', coin: 100 }
┌─────────────────┬────────┐
│     (index)     │ Values │
├─────────────────┼────────┤
│   Luot chay:    │   5    │
│ Bien tich tru:  │  500   │
└─────────────────┴────────┘
{ id: 5, name: 'C#', coin: 200 }
700
*/


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(sport) {
    return sport.reduce((getTotalGold,sports) => getTotalGold + sports.gold, 0)
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23
// c2
var getTotalGold = sports.reduce(function(total,sport) {
    return total + sport.gold 
},0)

//------------------------------

function arrToObj(arr){
    var obj= {}

    return arr.reduce(function(a,b){
        a[b[0]] = b[1]
        return a
    }, obj)
}
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
