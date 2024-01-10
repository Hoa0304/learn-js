var coures = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,

    },
    {
        id: 2,
        name: 'Python',
        coin: 100,

    },
    {
        id: 3,
        name: 'C++',
        coin: 50,

    },
    {
        id: 4,
        name: 'Java',
        coin: 100,

    },
    {
        id: 5,
        name: 'C#',
        coin: 200,

    }
];

function couresHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
    }
}
var newCourses = coures.map(couresHandler) 

console.log(newCourses)
/*
[
    {
      id: 1,
      name: 'Khoa hoc: Javascript',
      coin: 250,
      coinText: 'Gia: 250',
      index: 0
    },
    {
      id: 2,
      name: 'Khoa hoc: Python',
      coin: 100,
      coinText: 'Gia: 100',
      index: 1
    },
    {
      id: 3,
      name: 'Khoa hoc: C++',
      coin: 50,
      coinText: 'Gia: 50',
      index: 2
    },
    {
      id: 4,
      name: 'Khoa hoc: Java',
      coin: 100,
      coinText: 'Gia: 100',
      index: 3
    },
    {
      id: 5,
      name: 'Khoa hoc: C#',
      coin: 200,
      coinText: 'Gia: 200',
      index: 4
    }
  ]
*/
