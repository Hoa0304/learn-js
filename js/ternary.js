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

// Làm bài
function getCanVoteMessage(age) {
    return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu'
}



// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'