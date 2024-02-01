var boxElement = document.querySelector('.box')
console.log(boxElement.classList.lenght)
console.log(boxElement.classList.value)

boxElement.classList.add('green', 'blue','red')

console.log(boxElement.classList.contains('green'))
// true
// kiểm tra class đó có hay k, ktra open có mở ra hay k

boxElement.classList.remove('green')
console.log(boxElement.classList.contains('green'))
// false

setTimeout(() => {
    boxElement.classList.toggle('green')
}, 3000)


var h1 = document.querySelector('h1')
h1.classList.add('title')

var p = document.querySelector('p')

p.classList.remove('sub-title')
p.classList.add('content')

let divGroup = document.querySelectorAll('div') 
divGroup.forEach((div)=>{div.classList.add('box')})