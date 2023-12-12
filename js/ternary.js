var course = {
    name: 'Javascript',
    coin: 250
}
// binh thuong
if(course.coin > 0) {
    console.log(`${course.coin} Coins`)
} else {
    console.log('Free')
}
// 3 ngoi
var result = course.coin > 0 ? `${course.coin} Coins` : 'Free'