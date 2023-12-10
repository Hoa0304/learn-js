// Số chẵn là số khi chia cho 2 sẽ có phần dư là 0
// Số lẻ là số khi chia cho 2 sẽ có phần dư là 1

// Khai báo biến number, và gán trá trị cho biến number
var number = 13;

// Sử dụng toán tử % để lấy ra phần dư của number khi chia cho 2
// Khai báo biến remian ,và gán phần dư cho biến đặt tên là remain
var remain = number % 2

// Sử dụng toán tử so sánh === để thực hiện so sánh biến remain với 1
// Khai báo biến isOdd, và gán kết quả so sánh cho biến isOdd
var isOdd = remain === 1;

// In giá trị của biến isOdd ra cửa sổ console của trình duyệt
console.log(isOdd) // Output: true


let x = 5;
let y = 5;
console.log(x === y); //true

x !== y; //x != y và x khác kiểu dữ liệu y

console.log(5 !== 10); //false, vì khác giá trị nhưng cùng kiểu dữ liệu
console.log(5 !== '10'); //true

//----------------------------------------------------------------
function run(a) {
    // 
    if(a % 3 == 0 && a  != 15) {
        return 1;
    }else if(a % 5 == 0 && a  != 15) {
        return 2
    }else if(a% 15 ==0) {
        return 3
    }else{
        return 0
    }
}

console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3