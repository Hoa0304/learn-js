### Biến
- Tên biến có phân biệt chữ hoa và thường và số, kí tự đầu tiên của biến phải là chữ.
- ```alert``` chỉ hiển thị được một cái, nếu có 2 cái thì sẽ hiển thị lần lượt.
__Sự khác biệt giữa không có ```;``` cuối dòng code và có : Nếu như viết liền trên cùng 1 dòng mà k có ```;``` thì sẽ lỗi còn nếu có thì chạy bình thường__
### Cách sử dụng comments sao cho đúng
1. Mục đích sử dụng :
- Ghi chú.
- Vô hiệu hóa mã.
2. Loại comments :
- Comment 1 dòng.
- Commet nhiều dòng.
3. Sử dụng phím tắt :
- Windows: Ctrl + / .
- MacOS: Command +/ .
### Thuật ngữ Built-in
- Thuật ngữ "built-in" (hay còn gọi là "built-in function" hoặc "built-in object" )được sử dụng để chỉ các hàm hoặc đối tượng có sẵn mà ngôn ngữ cung cấp sẵn cho lập trình viên sử dụng mà không cần phải định nghĩa hay khai báo thêm.
1. Alert : được sử dụng để hiển thị các thông báo cho người dùng.
2. Console : ghi thông điệp hoặc thông tin ra màn hình console.
- console.log được sử dụng để ghi log và theo dõi các thông tin trong quá trình phát triển và gỡ lỗi của chương trình.
3. Confirm : Tạo ra hộp thoại để xác nhận.
4. Prompt : Tạo ra hộp thoại để xác nhận và dưới cái text mình cho sẽ có 1 ô input cho người dùng nhập vào.
5. Set timeout : thực thi 1 đoạn code sau 1 khoảng thời gian mình set. Chỉ thực thi 1 lần duy nhất.

> 1.3.4 khi cửa sổ bật lên thì sẽ ngăn cản các hành động khác.Chỉ khi ấn xác nhận thì các hành động tiếp theo mới được diễn ra, cách giải quyết ở phần return trong hàm.
- Kí hiệu :
```js
setTimeout(function() {
    //nội dung thực thi
    alert('Hoanehehe')
}, 1000)
```
- Ví dụ ở trên ```1000``` là nơi để mình set time, ở đơn vị là mili giây, 1000mls= 1s.
6. Set interval : tương tự ở trên nhưng là thực thi liên tục . Time mình set là 1s thì cứ cách 1s sẽ thực thi tiếp.

### Toán tử 

<details>
<summary>1. Toán tử số học - Arithmetic.</summary>

- Cộng: ```+```.
- Trừ: ```-```.
- Nhân: ```*```.
- Chia: ```/```.
- Lũy thừa: ```**```.
- Chia lấy số dư: ```%```.
- Tăng 1 giá trị số: ```++```.
- Giam 1 giá trị số: ```--```.

</details>

- Bài làm  :
    - [Arithmetic](js/Arithmetic.js) 


- x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng.
- ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng.
- x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm.
- --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm.

```js
var x = 1 ;

var a = x++ + --x;
```

> 1 + 1 = 2.

<details>
<summary>2. Toán tử gán - Assignment.</summary>

| Toán tử  |   Ví dụ     | Tương đương   |
|:--------:|:-----------:|:-------------:|
|   =   |  x = y  |   x = y |
|   +=  | x += y | x = x + y |
| -= | x -= y | x = x - y |
|  *= | x *= y | x = x * y |
|  /= | x /= y | x =x / y |
| **= | x **= y | x = x ** y |

</details>

- Bài làm  :
    - [Assignment](js/Assignment.js) 

<details>
<summary>3. Toán tử so sánh - Comparison.</summary>

| Toán tử  |   |   |
|:--------:|:-----------:|:-------------:|
|   ==   |  -->  |   Bằng |
|   !=   |  -->  |  Không bằng |
|    >   |  -->  |   Lớn hơn |
|   <    |  -->  |   Nhỏ hơn |
|   >=   |  -->  |   Lớn hơn hoặc bằng |
|   <=   |  -->  |   nhỏ hơn hoặc bằng |

##### So sánh bằng tuyệt đối === và !== : cả kiểu dữ liệu

</details>

- Bài làm  :
    - [Comparison](js/Comparison.js) 
4. Toán tử logic - Logical: ```&&```, ```||```, ```!```.
- [logical](js/logical.js) 

| Toán tử  |   Diễn tả    | 
|:--------:|:-----------:|
|   &&   | phép và (toán tử && trong javascript) trả về true nếu 2 số hạng là true: a && b |
|   ||  |phép hoặc toán tử hoặc trong javascript trả về true nếu 1 trong 2 số hạng là true : a| 
| ! |phủ định; !a trả về giá trị ngược với biểu thức a|

5. Toán tử nối chuỗi: ```+```.
- [Chuỗi](js/chuoi.js) 

- [here](js/Toantu.js) 
### Kiểu dữ liệu
1. Kiểu dữ liệu nguyên thủy - primitive Data.
- Number.
- String.
- Boolean.
- Undefined: biến chưa dc định nghĩa chưa dc khởi tạo giá trị.
- Null.
- Symbol: unique (duy nhất).
2. Dữ liệu phức tạp - Complex Data.
- Function.
- Object :
    - Object.
    - Array.

#### typeof : kiểm tra kiểu dữ liệu

> console.log(typeof null) thì ra object

```
Dáu nháy đơn :  \'
Dâu nháy kép :  \"
Xuông dòng   :  \n
Dâu thoát    :  \\
Dâu tab      :  \t
Xoá nguoc 1 kí tự : \b
```

- [here](js/kieuDuLieu.js) 

### Truthy và Falsy là gì?
- Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu __boolean__ mà có giá trị __true__ thì ta gọi giá trị đó là __Truthy__.
> !! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành "khẳng định". Trong Javascript thì đây là một "tip" để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.
- Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.

- Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.

- Trong Javascript có 6 giá trị sau được coi là Falsy:

1. false
2. 0 (số không)
3. '' or "" (chuỗi rỗng)
4. null
5. undefined
6. NaN

-  Note : Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:
1. '0' (một chuỗi chứa số không)
2. ' ' (một chuỗi chứa dấu cách)
3. 'false' (một chuỗi chứa từ khóa false)
4. [] (một array trống)
5. {} (một object trống)
6. function(){} (một hàm "trống")

### Hàm (function)
1. Hàm ?
- Một khối mã.
- Làm 1 việc cụ thể.
2. Loại hàm.
- Built-in.
- Tự định nghĩa.
3. Tính chất.
- Không thực thi khi định nghĩa.
- Sẽ thực thi khi được gọi.
- Có thể nhận tham số.
- Có thể trả về 1 giá trị.

### Tham số trong hàm 
> tham số : parameter.
1. Tham số.
    - Định nghĩa : là 1 giá trị được truyền vào.
    - Không giới hạn kiểu dữ liệu.
    - Tính private, chỉ dùng parameter trong cặp ngoặc nhọn của function.
2. Truyền tham số.
    - 1 tham số.
    - Nhiều tham số.
3. Arguments?
    - Đối tượng.
    - vòng for of( lập đi lập lại , số lần chạy = số element mà đang có trong arguments [được truyền vào]).
    - nó là array.
    - Cách sử dụng : [here](js/function.js) .

### Từ khóa return trong hàm
- Một hàm nếu không ```return``` thì kết quả mặc định sẽ là undefined.
    - Cách sử dụng : [here](js/return.js) 
- Một số điều cần biết về function: 
    - Khi function trùng tên : nhận function sau, function sau đè function trước.
    - Khai báo biến trong hàm : phạm vi sử dụng chỉ ở trong hàm.
    - Định nghĩa hàm trong hàm : phạm vi sử dụng chỉ ở trong hàm.

### Các loại function

1. Declaration function: đầu tiên là ```function``` theo sau sẽ là tên, khong có tên thì k phải là declaration.
    - gọi hàm được trước cái mình tạo hàm(hosting).
```js
function message() {

}
// thực chất thì nó là 1 declaration function
```
2. Expression function: có thể đặc tên hoặc không.
    - Nếu đặt tên thì chỉ có mục đích: dễ hiểu.
```js
var message = function() {

}

setTimeout(function autoLogin() {

});

var myObject = {
    myFunction: function() {

    }
}
```
3. Arrow function.

### Kiểu dữ liệu chuỗi (string)
<details>
<summary>1. Có 2 cách để tạo:</summary>


    - Cách 1:

    ```js
    var fullName = 'Tran Thi Cam Hoa';
    ```

    - Cách 2:

    ```js
    var options = new String('Hello')
    ```

- Nên dùng cách 1 vì cách 2 dài dòng và cách 2 đang khởi tạo 1 đối tượng, tạo ra 1 ít tình, Khó khăn trong việc kiểm tra kiểu dữ liệu.
```js
var fullName = 'Tran Thi Cam Hoa';

var options = new String('Hello')

console.log(typeof options)
//thay vì là string thì nó ra là object
```

</details>

2. Một số case sử dụng backslash (\).

    - Dáu nháy đơn :  \' .
    - Dâu nháy kép :  \".
    - Xuông dòng   :  \n.
    - Dâu thoát    :  \\.
    - Dâu tab      :  \t.
    - Xoá nguoc 1 kí tự : \b.

3. Xem độ dài chuỗi: ```.lenght``` . 
```js
var lorem = "lorem ipsum dolor sit amet consectetur con laoreet inter sapien"
console.log(lorem.length)
//63
```

- Dùng ```+``` để nối chuỗi với nhau (xuống dòng nếu dài quá) hoặc xún hàng.
```js
var lorem = 
"lorem ipsum dolor sit amet consectetur con laoreet inter sapien"
```

4. Template string ES6 : nhớ dùng ``` ` ``` không phải ```'```.
    - Cách sử dụng : [here](js/string.js) 

<details>
<summary>Các cách làm việc với chuỗi</summary>

1. Length.
2. Find index.
3. Cut string
4. Replace.
5. Convert to upper case.
6. Convert to lower case.
7. Trim.
8. Split.
9. Get a character by index.

</details>