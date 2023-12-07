var numbers = [
    1,
    3,
    5
]

//-----------------------------------------

var languages = ['js', 'ru', 'java', 'C++']
var games = ['lien quan',
    'ngoi sao lap lanh',
    'dai hiep chay di'
]

console.log(languages.toString())
//js,ru,java,C++
console.log(languages.join(' '))
//js ru java C++
console.log(languages.join(', '))
//js, ru, java, C++
console.log(languages.join(' - '))
//js - ru - java - C++
console.log(languages.pop())
//C++

console.log(languages.push('C#', 'JavaScript'))
//5

console.log(languages.shift())
console.log(languages.unshift())


console.log(languages.splice(0, 1))

console.log(languages.splice(2,1, 'ts'))

console.log(languages.splice(2,0, 'php'))

console.log(languages.concat(games))
/*[
    'java',
    'C#',
    'php',
    'ts',
    'lien quan',
    'ngoi sao lap lanh',
    'dai hiep chay di'
  ]
*/
console.log(languages.slice(0, 1))
 
function joinWithCharacter(array, charactor) {
    return array.join(charactor)
}


// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"

// Viết hàm tại đây
function getLastElement(animals) {
    var cp = animals.slice(0)
    return cp.pop()
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// Viết hàm tại đây
function getFirstElement(animals) {
    var cp = animals.slice()
    return cp.shift()
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
