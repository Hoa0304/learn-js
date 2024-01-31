document.write('Hello world')
//----------------------------------------------------------------
var headings = document.querySelectorAll('.headd');

for (var i = 0; i < headings.length; i++) {
    console.log(headings[i]);
}

//----------------------------------------------------------------
console.log(document.forms[1])

//----------------------------------------------------------------
var head = document.querySelector('h1')

head.title = 'HelloWorld'

head.className = 'HelloWorld'

var heading = document.querySelector('a')

heading.href = 'Hello World'

// gán trực tiếp

heading.setAttribute('class', 'heading')
//setAttribute

console.log(heading.getAttribute('class'))
//getter
