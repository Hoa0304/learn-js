var listCoursesBlock= document.querySelector('#list-courses');

var courseAPI = 'http://localhost:3000/courses'

function start(){
    getCourses(function(courses){
        courses.forEach(renderCourses)
    })

}

start()

function getCourses(cb){
    fetch(courseAPI)
    .then(function(response){
        return response.json();
    })
    .then(cb);
}

function renderCourses(){
    getCourses(function(courses){
        courses.forEach(function(course){
            var li = document.createElement('li');
            li.innerHTML = course.name;
            listCoursesBlock.appendChild(li);
        })
    })
}