function myFunction(param){
    if (typeof param === 'function') {
        param('Hoc lap trinh')
    }
}

function myCallBack(value) {
    console.log('Value: ', value)
}

myFunction(myCallBack)

//----------------------------------------------------------------
Array.prototype.map2 = function(callBack) {
    var outPut= []
    var arLength = this.length
    // dua length ra ngoai de luc lap k bi choc den thuoc tinh length
    for(var i = 0; i < arLength ; i++) {
        var result = callBack(this[i], i)
        outPut.push(result)
    }
    return outPut;
}

var courses = [
    'js',
    'PHP',
    'Ruby'
]

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`
});

console.log(htmls.join('\n'))
