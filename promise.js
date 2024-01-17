
var promise = new Promise(function(resolve, reject) {

    setTimeout(function() {
    
        resolve('foo');
    
    }, 1000);
    
});
    
promise.then(function(value) {
    
    console.log(value);
    
});
    
console.log(promise);
