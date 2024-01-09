var languages = [
    'English',
    'Thailand',
    'Japan'
]

for(var value of languages) {
    console.log(value)
}

var Hoa = 'TranThiCamHoa'

for(var value of Hoa) {
    console.log(value)
}

// T
// r
// a
// n
// T
// h
// i
// C
// a
// m
// H
// o
// a

var myObj = {
    name: 'TranThiCamHoa',
    age: 20,
    languages: ['English', 'Thailand', 'Japan']
}

for(var value of Object.keys(myObj)) {
    console.log(value)
}
// name
// age
// languages
for(var value of Object.keys(myObj)) {
    console.log(myObj[value])
}
// TranThiCamHoa
// 20
// [ 'English', 'Thailand', 'Japan' ]

//or
console.log(Object.values(myObj))
//[ 'TranThiCamHoa', 20, [ 'English', 'Thailand', 'Japan' ] ]
