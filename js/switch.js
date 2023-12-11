var date = 2;

switch (date) {
    case 2 :
        console.log('Hôm nay là thứ 2')
        break
    case 3 : // sử dụng toán tử === để so sánh
        console.log('Hôm nay là thứ 3')
        break
    case 4 :
        console.log('Hôm nay là thứ 4')
        break
    case 5 :
        console.log('Hôm nay là thứ 5')
        break
}


//--------
function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
    }

    return result;
}


function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break
        case "Apple":
            result = "This is an Apple";
            break;
        default :
            result = "No fruits";
    }

    return result;
}