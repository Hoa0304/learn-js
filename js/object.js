var games = 'lquan'
var myInfo = {
    name: 'Cam Hoa',
    age: 18,
    address: 'Cam Le, VN',
    'phone-number': 6725472,
    [games] : violet,
    getName: function() { 
        return this.name
    }
}
// cáchđể thêm 1 key
myInfo.email = 'tranthicamhoa@gmail.com'
myInfo['my-email'] = 'tranthicamhoa@gmail.com'
// cách để lấy value ra ngoài
console.log(myInfo.age) //c1
console.log(myInfo['age']) //c2
// kq: 18
console.log(myInfo.getName()) //;
