var fullName = 'Trần Thị Cẩm Hoa';
var age = 19
var language = 'JavaScript';

console.log(language)
alert(fullName)
console.log ('Hello Console Log');
setTimeout(function() {
    //nội dung thực thi
    alert('Hoanehehe')
}, 1000)

setInterval(function() {
    console.log('Hello'+ " " + 'js' + Math.random);
},1000)

//underfined : biến chưa dc định nghĩa chưa dc khởi tạo giá trị
var name = 'Dat';
console.log(name);

name = 'Dat'+ '' + "Di Caprio";
console.log(name);

name = true ;
console.log("name = "+ name);

var isActor = true;
var isHandsome = true;

var shouldILikeHim = isActor && isHandsome;

console.log('Should I Like Him?-Answer : ' + shouldILikeHim);