var num= [1,2,3,[4,5,6], 7,8,9,[0, 8]];
var flatNum = num.reduce(function(a,b){
    return a.concat(b);
}, [])
console.log(flatNum)

var topics = [
    {
        topic: "FE",
        courses: [
            {
                id: 1,
                title: "html, css"
            },
            {
                id: 2,
                title: "javascript"
            }
        ]
    },
    {
        topic: "BE",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var newCourse = topics.reduce(function(courses,topic){
    return courses.concat(topic.courses)
},[])

console.log(newCourse)

var html= newCourse.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
})

console.log(html.join(''))
