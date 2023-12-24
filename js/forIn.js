var myInfo = {
    name: 'Hoa',
    age: 25,
    address: 'Da Nang'
};

for (var key in myInfo) {
    console.log(key)
    // name, age, address
    console.log(myInfo[key])
    // Hoa, 25, Da Nang
}

var languages = [
    'English',
    'Thailand',
    'Japan'
]

for (var key in languages) {
    console.log(key)
    //0, 1, 2
    console.log(languages[key])
    // English, Thailand, Japan
}

function run(object) {
    var arr = []
    for(var key in object) {
        arr.push('Thuộc tính ' + key + ' có giá trị ' + object[key])
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]