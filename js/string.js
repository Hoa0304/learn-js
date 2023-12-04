
var fullName = 'Tran Thi Cam Hoa';
const email = 'chtran03042004@gmail.com'

var options = new String('Hello')

console.log(typeof options)
//thay vì là string thì nó ra là object

var lorem = "lorem ipsum dolor sit amet consectetur con laoreet inter sapien"
console.log(lorem.length)
//63

var firstName = 'Hoa';
var lastName = 'Tran';

console.log(`Toi la: ${firstName} ${lastName}`);
// firstName và lastName nó tự hiểu là kiểu string 

/*---------------------------cách làm việc với chuỗi-------------------------------------*/
var myString = 'lorem ipsum dolor sit amet ipsum'

console.log(myString.search('ipsum'))

console.log(myString.indexOf('ipsum', 9))

console.log(myString.slice(4,14))

console.log(myString.replace('ipsum', 'Hoa' ))

console.log(myString.replace(/ipsum/g, 'Hoa' ))

console.log(myString.toLowerCase())

console.log(myString.toUpperCase())

console.log(myString.trim().length)

var languages = 'Hoa, Man, Dat';
console.log(languages.split(', '))
// [ 'Hoa', 'Man', 'Dat' ]

const myString2 = 'Hoa Tran';
console.log(myString2.charAt(0))
//H

var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    return str.split(', ')
}

// Expected results
console.log(strToArray(coursesStr)) 

// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']



function getContentLength(content) {
    return content.length
}


// Mở tab Console để xem kết quả trực quan
console.log(getContentLength('JavaScript'));
console.log(getContentLength('Hello World'));

function getUpperCaseName(name) {
    return name.toUpperCase()
}



// Expected results:
console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"