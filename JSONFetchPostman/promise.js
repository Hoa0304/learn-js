setTimeout(function() {
    console.log(1);
},2000)

console.log(2)
// bất đồng bộ in ra 2 rồi mới đến 1

setTimeout(function() {
    console.log(1);
    setTimeout(function() {
        console.log(2);
        setTimeout(function() {
            console.log(3);
            setTimeout(function() {
                console.log(4);
                setTimeout(function() {
                    console.log(5);
                    setTimeout(function() {
                        console.log(6);
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)


var promise = new Promise(function(resolve, reject) {

    setTimeout(function() {
    
        resolve('foo');
    
    }, 1000);
    
});

// resolve: giải quyết / thành công còn reject : từ chối / thất bại, bắt buộc phải gọi 1 trong 2 chứ k là nó bị treo a

promise
    .then(function() {
        return 1;
    })
    .then(function() {
        return 2;
    })
    .then(function() {
        return 3;
    })
    .then(function(){
        console.log('Done!')
    })

    function hell(value, cb) {
        cb(value);
    }
    
    // Không sử dụng Promise dẫn đến tạo ra callback hell 
    hell(1, function (valueFromA) {
        hell(valueFromA + 1, function (valueFromB) {
            hell(valueFromB + 1, function (valueFromC) {
                hell(valueFromC + 1, function (valueFromD) {
                    console.log(valueFromD + 1);
                });
            });
        });
    });
    
    // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
    function notHell(value) {
        return new Promise(function (resolve) {
            resolve(value);
        });
    }
    
    notHell(1)
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            return value + 1;
        })
        .then(function (value) {
            console.log(value + 1);
        });
    
    
    
    
        