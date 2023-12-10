console.log(Math.PI)
console.log(Math.round(1.5))
console.log(Math.abs(4))
console.log(Math.ceil(2.2))
console.log(Math.floor(5.99999))
console.log(Math.random())

var random = Math.floor(Math.random() *5)
var bonus = [
    '10 coins',
    '20 coins',
    '30 coins',
    '40 coins',
    '50 coins',
]

console.log(bonus[random])

// tỷ lệ %
// 10%
 if(random < 10) {
    console.log('ra rồi má')
 }

 //----
 var random = Math.floor(Math.random() *5)

function getRandomItem(bonus) {
    return bonus[random]
}