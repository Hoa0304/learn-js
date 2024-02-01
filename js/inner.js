var box = document.querySelector('.box');
box.innerHTML = '<h1>Heading</h1>';
console.log(document.querySelector('h1').innerText);
// thêm
console.log(document.querySelector('h1').innerHTML);
// lấy ra

//----------------------------------------------------------------
// Dom Css
var div = document.querySelector('.red')

Object.assign(div.style, {
    backgroundColor: '#f00'
})

var p = document.querySelector('p')
Object.assign(p.style, {
    color: '#f05123'
})