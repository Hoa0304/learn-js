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

//----------------------------------------------------------------
Array.prototype.myFilter = function (cb) { 
    let output = []; 
    let index = 0; 
    for (let element of this) { 
        let result = cb(element, index++, this); 
        if (result) { 
            output.push(element); 
        } 
    } return output; 
}

/**
Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
 */

// ----------------------------------------------------------------

Array.prototype.mySome = function(cb) {
    for( var i in this){ 
        if(this.hasOwnProperty(i)){ 
            if(cb(this[i], i, this)){ 
                return true; 
            }; 
        } 
    } return false;
}


//----------------------------------------------------------------

Array.prototype.myEvery = function(cb) {
    var output = true
    for( var i in this){ 
        if(this.hasOwnProperty(i)){ 
            var result = cb(this[i], i,this); 
            if(!result){
                output = false; 
                break;  
            }; 
        } 
    } return output;
}
