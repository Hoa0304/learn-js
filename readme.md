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
- Kí hiệu :
```js
setTimeout(function() {
    //nội dung thực thi
    alert('Hoanehehe')
}, 1000)
```
- Ví dụ ở trên ```1000``` là nơi để mình set time, ở đơn vị là mili giây, 1000mls= 1s.
6. Set interval : tương tự ở trên nhưng là thực thi liên tục . Time mình set là 1s thì cứ cách 1s sẽ thực thi tiếp.

> 1.2.3 ba hàm này bậc lên cửa sổ hộp thoại.
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

</details>

- Bài làm  :
    - [Comparison](js/Comparison.js) 
4. Toán tử logic - Logical: ```&&```, ```||```, ```!```.
- [logical](js/logical.js) 

5. Toán tử nối chuỗi: ```+```.
- [Chuỗi](js/chuoi.js) 

- [here](js/Toantu.js) 
