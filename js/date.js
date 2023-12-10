var date = new Date();

console.log(data);

var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

console.log( `${day}/${month}/${year}`)

function getNextYear() {
    var date = new Date();
    var year = date.getFullYear();

    return year +1
}