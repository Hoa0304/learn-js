### Biến
- Tên biến có phân biệt chữ hoa và thường và số, kí tự đầu tiên của biến phải là chữ.
- ```alert``` chỉ hiển thị được một cái, nếu có 2 cái thì sẽ hiển thị lần lượt.
__Sự khác biệt giữa không có ```;``` cuối dòng code và có : Nếu như viết liền trên cùng 1 dòng mà k có ```;``` thì sẽ lỗi còn nếu có thì chạy bình thường__
<details>
<summary>var and let</summary>

Trong JavaScript, `var` và `let` là hai từ khóa để khai báo biến. Mặc dù cùng được sử dụng để khai báo biến, nhưng chúng có một số khác biệt quan trọng.

1. Phạm vi (Scope):
   - Biến được khai báo bằng `var` có phạm vi toàn cục hoặc phạm vi hàm. Nghĩa là biến có thể truy cập từ bất kỳ đâu trong cùng phạm vi đó.
   - Biến được khai báo bằng `let` có phạm vi khối (block scope), nghĩa là biến chỉ có thể truy cập được trong cùng một khối mã (block) nơi nó được khai báo.

2. Hosting:
   - Biến được khai báo bằng `var` có hosting (hoisting). Điều này có nghĩa là dù bạn khai báo biến ở bất kỳ đâu trong phạm vi, nó sẽ được đưa lên đầu phạm vi và có thể truy cập vào biến trước khi nó được khai báo.
   - Biến được khai báo bằng `let` không được hosting. Điều này có nghĩa là bạn chỉ có thể truy cập vào biến sau khi nó được khai báo trong khối mã hiện tại.

3. Đặc tả:
   - Biến được khai báo bằng `var` có thể được khai báo lại trong cùng phạm vi và vẫn giữ nguyên giá trị của nó.
   - Biến được khai báo bằng `let` không thể được khai báo lại trong cùng phạm vi, nếu bạn cố gắng khai báo lại, sẽ xảy ra lỗi.

- Ví dụ:

```javascript
function example() {
  var x = 10;
  let y = 20;

  if (true) {
    var x = 30; // Khai báo lại biến x, giá trị của x thay đổi
    let y = 40; // Khai báo một biến mới y trong khối mã này
    console.log(x); // Output: 30
    console.log(y); // Output: 40
  }

  console.log(x); // Output: 30
  console.log(y); // Output: 20
}

example();
```

- Trong ví dụ trên, chúng ta khai báo biến `x` sử dụng `var` và biến `y` sử dụng `let`. Trong khối mã bên trong `if`, chúng ta khai báo lại biến `x` sử dụng `var` và khai báo một biến mới `y` sử dụng `let`. Khi chúng ta in ra giá trị của `x` và `y` trong khối mã và sau khối mã, chúng ta thấy rằng giá trị của `x` đã thay đổi trong cùng phạm vi, trong khi giá trị của `y` vẫn giữ nguyên trong phạm vi khối và bị ảnh hưởng bởi phạm vi khác.

</details>

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
| \|\| | phép hoặc toán tử hoặc trong javascript trả về true nếu 1 trong 2 số hạng là true : a | 
| ! |phủ định; !a trả về giá trị ngược với biểu thức a |

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
6. NaN : đại diện cho 1 số k hợp lệ.

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

2. Một số case sử dụng backslash ```(\)```.

    - Dáu nháy đơn :  ```\'``` .
    - Dâu nháy kép :  ```\"```.
    - Xuông dòng   :  ```\n```.
    - Dâu thoát    :  ```\\```.
    - Dâu tab      :  ```\t```.
    - Xoá nguoc 1 kí tự : ```\b```.

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

- Cách sử dụng : [here](js/string.js).

1. Length: đo đường dài của 1 chuỗi.
2. Find index: tìm vị trí của kí tự trong 1 chuỗi.
```js
var myString = 'lorem ipsum dolor sit amet ipsum'

console.log(myString.search('ipsum'))
//6
console.log(myString.indexOf('i', 9))
//27
```

- Tìm vị trí cuối cùng trong chuỗi dùng ```.lastIndexOf```.
- Trong trường hợp không tìm được thì trả về giá trị ```-1```.

- Khác nhau giữa ```search``` và ```indexOf``` :
    - ```search``` : tìm kiếm theo biểu thức chính quy và không thể tìm vị trí ở sau như ```indexOf```.
3. Cut string.
```js
var myString = 'lorem ipsum dolor sit amet ipsum'
console.log(myString.slice(4,14))
//m ipsum do
```
4. Replace: thay chữ.
- Thay 1 cụm chữ đầu.

```js
console.log(myString.replace('ipsum', 'Hoa' ))
```

- Kiếm tất cả các chữ ```ipsum``` thay bằng ```Hoa```.
```js
console.log(myString.replace(/ipsum/g, 'Hoa' ))
```
5. Convert to upper case: chuyển đổi 1 chuỗi tất cả thành chữ hoa.
```js
console.log(myString.toUpperCase())
```
6. Convert to lower case: chuyển đổi 1 chuỗi tất cả thành chữ thường.
```js
console.log(myString.toLowerCase())
```
7. Trim: loại bỏ tất cả khoảng trắng.
```js
console.log(myString.trim().length)
```
8. Split: cắt 1 cái chuỗi thành 1 array, và phải có 1 điểm chung để tách.
```js
var languages = 'Hoa, Man, Dat';
console.log(languages.split(', '))
// [ 'Hoa', 'Man', 'Dat' ]
```
- Nếu muốn tách từng chữ thì dùng ```('')```.
9. Get a character by index: tách chữ trong 1 chuỗi cho trước.


    
```js

const myString2 = 'Hoa Tran';
console.log(myString2.charAt(0))
//H

```

</details>


### Kiểu dữ liệu số (number)

- Kiểu số - Number :
    1. Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này.
    2. Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.

| **Phương thức**  | **Vai trò**  |
|:--------:|:-----------:|
|   Number.isFinite()   |  Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean  | 
|   Number.isInteger()  |  Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean  | 
|    Number.parseFloat()   | Chuyển đổi chuỗi đã cho thành một số dấu phẩy động  |   
|   Number.parseInt()    |  Chuyển đổi chuỗi đã cho thành một số nguyên  |  
|   Number.prototype.toFixed()  |  Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân  |  
|   Number.prototype.toString()   |  Chuyển đổi và trả về số đã cho dưới dạng chuỗi |

- Cách sử dụng : [here](js/number.js).

#### Làm việc với số
1. Tạo giá trị number: có 2 cách.
    - Thường và gọi từ khóa new giống string.
2. Làm việc với number.
    - Hàm check NaN : ```isNaN```.
- Cách sử dụng : [here](js/number.js).

### Làm việc với mảng
- Khi dùng ```typeof``` thì là object.
- Hàm check array : ```isArray```.
- Truy xuất mảng : Lấy phần tử trong mảng.
```js
var games = ['lien quan',
    'ngoi sao lap lanh',
    'dai hiep chay di'
]
console.log(games[2])
// ngoi sao lap lanh
```


<details>
<summary>Các cách làm việc với mảng</summary>


1. To String.
```js
var languages = ['js', 'ru', 'java', 'C++']

console.log(languages.toString())
//js,ru,java,C++
```
2. Join.
```js
var languages = ['js', 'ru', 'java', 'C++']

console.log(languages.join(' '))
//js ru java C++
console.log(languages.join(', '))
//js, ru, java, C++
console.log(languages.join(' - '))
//js - ru - java - C++
```
3. Pop: xóa element cuối mảng và trả về phần tử đã xóa.
- Khi ```pop()``` đến hết không còn phần tử thì trả về ```undefined``` và in ra mảng là ```[]``` .

```js
var languages = ['js', 'ru', 'java', 'C++']

console.log(languages.pop())
//C++
```

4. Push: thêm phần tử ở cuối mảng, và trả về độ dài mới của mảng .
```js
var languages = ['js', 'java', 'C++']
console.log(languages.push('C#', 'JavaScript'))
//5
```

5. Shift: xóa phần tử đầu tiên của mảng( tương tự ```pop()```).

6. Unshift: tương tự ```push()``` nhưng đầu mảng.
7. Splicing: xóa 1 phần tử bất kì trong mảng.
```js
var languages = ['js', 'java', 'C++']
console.log(languages.splice(0,1))
//java,C++
```
- ```0``` : vị trí con trỏ đặt ở đâu trong mảng.
- ```1``` : xóa từ con trỏ trở đi bao nhiêu mảng.
- __Có thể chèn 1 element vào bất kì đâu__.
```js
var languages = ['js', 'java', 'C++']
console.log(languages.splice(2,0, 'ru'))
//js,java,ru,C++
```

- Có thể dùng để thay 1 element.
```js
var languages = ['js', 'java', 'C++']
console.log(languages.splice(2,1, 'ru'))
//js,java,ru
```

8. Concat: nối array.

```js
var languages = ['js', 'ru', 'java', 'C++']
var games = ['lien quan',
    'ngoi sao lap lanh'              ,
    'dai hiep chay di'
]

console.log(languages.concat(games))
/*[
    'java',      
    'dai hiep chay di'
  ]     
*/

```
9. Slicing: cắt 1 vài element or 1 mảng.
- Truyền vào giá trị âm hay dương đều được.
```js
var games = ['lien quan',
    'ngoi sao lap lanh',
    'dai hiep chay di'
]

console.log(languages.slice(0, 1))
//ngoi sao lap lanh,dai hiep chay di

console.log(languages.slice(1))
=> cắt nguyên cái mảng
//slice(0): sao chép mảng
```


<details>
<summary>Làm việc với mảng</summary>

```js
var coures = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Python',
        coin: 100
    },
    {
        id: 3,
        name: 'C++',
        coin: 50
    },
    {
        id: 4,
        name: 'Java',
        coin: 100
    },
    {
        id: 5,
        name: 'C#',
        coin: 200
    }
]
```
1. forEach(): duyệt qua đc từng phần tử của mảng.
```js
coures.forEach(function(course) {
    console.log(course.name)
})
// Javascript
// Python
// C++
// Java
// C#

coures.forEach(function(course, index) {
    console.log(index, course)
})
/*
0 { id: 1, name: 'Javascript', coin: 250 }
1 { id: 2, name: 'Python', coin: 100 }
2 { id: 3, name: 'C++', coin: 50 }
3 { id: 4, name: 'Java', coin: 100 }
4 { id: 5, name: 'C#', coin: 200 }
*/
```
2. every(): kiểm tra tất cả các phần của 1 mảng phải thỏa mãn 1 điều kiện gì đó.

```js
var isFree = coures.every(function(course, index) {
    return course.coin === 0
})

console.log(isFree)
// false
```
3. some(): kiểm tra tất cả các phần của 1 mảng chỉ cần ```1 phần``` thỏa mãn 1 điều kiện gì đó thì ok.

```js
var isFree = coures.some(function(course, index) {
    console.log(index)
    return course.coin === 50
})

console.log(isFree)

// 0
// 1
// 2
// true
```
4. find(): tìm kiếm phần tử nếu không có thì trả về ```underfine``` chỉ trả về được 1 đối tượng. 

```js
var course = coures.find(function(course, index) {
    return course.name === 'Python'
})

console.log(course)
//{ id: 2, name: 'Python', coin: 100 }
```

- Kiem tra den ```id: 2``` la stop, sau do khong check nua.

5. filter(): tìm kiếm phần tử nếu không có thì trả về ```undefine``` trả về all đối tượng. .
6. map(): Thay đổi element của một array.
- Phải truyền vào bên trong ```map()``` , bản chất ben trong của map() là 1 vòng lặp, nó lặp qua từng phần tử của mảng.
- mỗi khi lặp qua một phần tử sẽ gọi lại 1 function để nó thực thi.
>> Trong thằng map() nó đang gọi lại 1 cái hư vô ```undefine()```.
- Trong function return cái gì thì newCourses trả về cái đó.

```js
function couresHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
    }
}
var newCourses = coures.map(couresHandler) 

console.log(newCourses)
/*
[
    {
      id: 1,
      name: 'Khoa hoc: Javascript',
      coin: 250,
      coinText: 'Gia: 250',
      index: 0
    },
    {
      id: 2,
      name: 'Khoa hoc: Python',
      coin: 100,
      coinText: 'Gia: 100',
      index: 1
    },
    {
      id: 3,
      name: 'Khoa hoc: C++',
      coin: 50,
      coinText: 'Gia: 50',
      index: 2
    },
    {
      id: 4,
      name: 'Khoa hoc: Java',
      coin: 100,
      coinText: 'Gia: 100',
      index: 3
    },
    {
      id: 5,
      name: 'Khoa hoc: C#',
      coin: 200,
      coinText: 'Gia: 200',
      index: 4
    }
  ]
*/
```
- Cách sử dụng : [here](js/map.js).
7. reduce(): .

- Cách sử dụng : [here](js/arr.js).

</details>


- Cách sử dụng : [here](js/array.js).
</details>

### Object 
- Cách sử dụng : [here](js/object.js).
```js
var games = 'lquan'
var myInfo = {
    name: 'Cam Hoa',
    age: 18,
    address: 'Cam Le, VN',
    'phone-number': 6725472,
    [games] : violet,
    getName: function() { 
        return this.name
    }
}
// cáchđể thêm 1 key
myInfo.email = 'tranthicamhoa@gmail.com'
myInfo['my-email'] = 'tranthicamhoa@gmail.com'
// cách để lấy value ra ngoài
console.log(myInfo.age) //c1
console.log(myInfo['age']) //c2
// kq: 18
```

#### Object constructor : xây dựng đối tượng (mô tả 1 đối tượng)

- Nhanh hơn , gọn hơn và dễ dàng hơn.
- Khi thêm 1 thuộc tính cho 1 đối tượng nào thì sẽ của mỗi đối tượng đó.
```js
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
        this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Hoa', 'Trần', 'Avatar');
var user= new User('Mẫn', 'Trần', 'Avatar');

author.title = 'con gái';
user.comment = 'trai';

console.log(author);
console.log(user);
/*
User {
  firstName: 'Hoa',
  lastName: 'Trần',
  avatar: 'Avatar',
  getName: [Function],
  title: 'con gái'
}
User {
  firstName: 'Mẫn',
  lastName: 'Trần',
  avatar: 'Avatar',
  getName: [Function],
  comment: 'trai'
}   
*/
```

#### prototype : nguyên mẫu (để tạo nên 1 đối tượng)
- Thêm một thuộc tính bên ngoài hàm tạo, còn bên trong là ```this``` .
- Tính chất : thêm vào đối tượng được tạo ra.
```js
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

User.prototype.className = '22ITe';

var author = new User('Hoa', 'Trần', 'Avatar');
var user= new User('Mẫn', 'Trần', 'Avatar');

console.log(author.className);
console.log(user);
```
- Phải gọi nó ra thì mới thấy nó được nếu ở terminal, còn ở web thì nó ở ```__proto__``` .

- Bài tập thêm : [here](js/prototype.js).
#### Đối tượng Date
- Object : đối tượng.
```js
var date = new Date();
```
- Nếu bỏ ```new``` thì là ```string```
- Bài tập thêm : [here](js/data.js).

- Tham khảo thêm tại : [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

<details>
<summary>Math Object</summary>

- ```Math.PI``` : trả về số PI chi tiết.
- ```Math.round()``` : làm tròn số .
- ```Math.abs()``` : giá trị tuyệt đối.
- ```Math.ceil()``` : làm tròn trên.
- ```Math.floor()``` : làm tròn dưới.
- ```Math.random()``` : trả về 1 dãy số thập phân nhỏ hơn 1.
- ```Math.min()``` : trả về số nhỏ nhất.
- ```Math.max()``` : trả về số lớn nhất.

- Bài tập thêm : [here](js/mathOj.js).

</details>

### Lệnh rẽ nhánh If else

- Bài tập thêm : [here](js/if.js).

#### Switch

```js
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
```
- Bài tập thêm : [here](js/switch.js).

#### Toán tử 3 ngôi (Ternary operator)
- If else nhiều thì không nên dùng.
- Nếu đơn giản thì dùng, phức tạp k nên dùng.
- Bài tập thêm : [here](js/ternary.js).

### Vòng lặp (LOOP)

<details>
<summary>For</summary>

- Lặp với điều kiện đúng.

- giá trị đầu, chạy duy nhất 1 lần_biểu thức điều kiện: quyết định vòng lặp có chạy hay k, nếu true thì chạy_tăng lên 1 giá trị.

/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */

 - Có thể ```for(;; i++)``` nhưng nó sẽ chạy vô hạn trên trình duyệt, _bị treo trình duyệt_.
 - Có thể ```for(;i<n; i++)``` nhưng phải có ```var i= 1``` ở trước đó thì sẽ thực thi bình thường.
 - Vế 3 có thể để ở dưới cuối vòng for, nếu không sẽ bị treo trình duyệt.

 - Bài tập thêm : [here](js/for.js).

</details>

<details>
<summary>For/in</summary>

- Lặp qua key của đối tượng (array,string).
- Có bao nhiêu key chạy bấy nhiêu lần.
- String :
```js
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
```

- Array:
```js
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
```

</details>

<details>
<summary>For/of</summary>

- Lặp qua value của đối tượng (array,string).
- Lấy ra từng value.
- Lay ra tung phan tu cua 1 mang.
```js
var languages = [
    'English',
    'Thailand',
    'Japan'
]

for(var value of languages) {
    console.log(value)
}

// English
// Thailand
// Japan
```

- lấy ra từng kí tự của 1 chuỗi.

```js
var Hoa = 'TranThiCamHoa'

for(var value of Hoa) {
    console.log(value)
}

// T
// r
// a
// n
// T
// h
// i
// C
// a
// m
// H
// o
// a
```

- Đối với object thì phải truyền qua 1 key.

```js

var myObj = {
    name: 'TranThiCamHoa',
    age: 20,
    languages: ['English', 'Thailand', 'Japan']
}

for(var value of Object.keys(myObj)) {
    console.log(value)
}
// name
// age
// languages
for(var value of Object.keys(myObj)) {
    console.log(myObj[value])
}
// TranThiCamHoa
// 20
// [ 'English', 'Thailand', 'Japan' ]

//or
console.log(Object.values(myObj))
//[ 'TranThiCamHoa', 20, [ 'English', 'Thailand', 'Japan' ] ]
```
</details>

<details>
<summary>while</summary>

- Lặp khi điều kiện đúng.
- Neu nhu k co ```i++``` thi vong lap se chay vo han.
```js
var i = 0

while(i < 10) {
    console.log(i)
    i++
}
```

- Nếu để ```i++``` trước ```console.log(i)``` thì sẽ in ra là 2 thôi chứ không có các số sau đó.

 - Bài tập thêm : [here](js/while.js).

</details>

<details>
<summary>do/while</summary>

- Lặp ít nhất 1 lần, sau đó lập khi điều kiện đúng.
- Neu nhu k co ```i++``` thi vong lap se chay vo han.

```js
var i = 0

do {
    i++
    console.log(i)
}while (i <10)

```
- Kiểm tra điều kiện từ vòng lặp thứ 2 trở đi.
 - Bài tập thêm : [here](js/doWhile.js).

</details>

<details>
<summary>Break và Continue trong vòng lặp</summary>

- ```Break``` : thoát khỏi vòng lặp.
- ```Continue```: bỏ qua vòng lặp.

 - Bài tập thêm : [here](js/continue.js).


</details>


<details>
<summary>Vòng lặp lồng nhau (Nested loop)</summary>

 - Bài tập thêm : [here](js/continue.js).

</details>

<details>
<summary>Đệ quy là gì? Học về đệ quy!</summary>

- Một cái hàm khi nó tự gọi lại chính nó.
- Flow : Chạy function ví dụ có tên deQuy() và sẽ thực thi đoạn code bên trong và đoạn code lại gọi deQuy() chính nó bên trong, tạo ra 1 vòng lặp vô hạn, ngta gọi là stack ( lặp vô hạn, tràn bộ nhớ ).

- A-> Loop -> CPU.
- A -> Đệ quy -> RAM.
- Muốn dùng _đệ quy_ phải xác định được __điểm dừng__ không thì sẽ bị tràn stack & logic handle => tạo ra điểm dừng.

```js
function deQuy(num) {
    if (num <0) {
        //Dung 
        //...
        return;
    }
    deQuy();
}
deQuy(10)
```

- Bài tập thêm : [here](js/deQuy.js).

</details>

<details>
<summary></summary>


</details>

<details>
<summary></summary>


</details>

<details>
<summary></summary>


</details>



- Bài tập thêm : [here](js/loop.js).
