var coures = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Python',
        coin: 100
    },
    {
        id: 3,
        name: 'C++',
        coin: 50
    },
    {
        id: 4,
        name: 'Java',
        coin: 100
    },
    {
        id: 5,
        name: 'C#',
        coin: 200
    }
]

coures.forEach(function(course) {
    console.log(course.name)
})
// Javascript
// Python
// C++
// Java
// C#
coures.forEach(function(course, index) {
    console.log(index, course)
})
/*
0 { id: 1, name: 'Javascript', coin: 250 }
1 { id: 2, name: 'Python', coin: 100 }
2 { id: 3, name: 'C++', coin: 50 }
3 { id: 4, name: 'Java', coin: 100 }
4 { id: 5, name: 'C#', coin: 200 }
*/


var isFree = coures.every(function(course, index) {
    console.log(index)
    return course.coin === 0
})

console.log(isFree)
//0
// false

var isFree = coures.some(function(course, index) {
    console.log(index)
    return course.coin === 50
})

console.log(isFree)

// 0
// 1
// 2
// true

var course = coures.find(function(course, index) {
    return course.name === 'Python'
})

console.log(course)
//{ id: 2, name: 'Python', coin: 100 }

//----------------------------------------------------------------

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sport) {
    return sport.filter((key) => key.like >5  ) 
}
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
