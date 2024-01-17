# ECMAScript là gì ? (ES)

- Tiêu chuẩn ECMAScript (viết tắt là ES) là một trong những tiêu chuẩn của ngôn ngữ Javascript khá phổ biến nhất hiện nay. Ta sẽ xem lại lịch sử ra đời của tiêu chuẩn nay:

- Vào thời kỳ cạnh tranh thị phần trình duyệt, Brendan Eich đã phát triển một ngôn ngữ đặc tả kịch bản cho trình duyệt Netscape, lúc đầu gọi là Mocha, rồi sang LiveScript rồi cuối cùng thành Javascript.
12-1995, Sun Microsystem và Netscape công bố Javascript, 3-1996 trình duyệt Netscape 2.0 đã hỗ trợ ngôn ngữ này. Tuy nhiên Microsoft cũng ra mắt một ngôn ngữ tương tự là JScript hỗ trợ cho trình duyệt IE 3.0 (việc đổi tên để tránh bản quyền)
- Netscape đã đưa Javascript tới ECMA International, đây là một tổ chức chuẩn hóa thông tin và hệ thống giao tiếp. Và việc chuẩn hóa ngôn ngữ Javascript được gọi là ECMA-262. Rồi cái tên ECMAScript hình thành từ đây
- Trong quá trình hình thành và phát triển tiêu chuẩn này, bước ngoặt lớn nhất là 2015, tiêu chuẩn ECMAScript 6 (ES6, ES2015) đánh dấu sự thay đổi rất lớn ngôn ngữ Javascript về cú pháp lẫn tính năng.

> Ngoài tiêu chuẩn ECMAScript là tiêu chuẩn phổ biến, thì có những tiêu chuẩn cũng có tiếng khác như Typescript.

# Cơ chế bất đồng bộ 

## Xử lý đồng bộ (Synchronous)

- Khi dòng code hoàn thành thì mới chạy dòng code tiếp theo.
- Nếu dòng code thực hiện quá lâu sẽ chuyển sang trạng thái chờ.

## Xử lý bất đồng bộ (Asynchronous)
- Có thể bỏ qua trạng thái chờ nếu không cần thiết và thực hiện các dòng code tiếp theo.
- Mặt tốt : giúp chúng ta xử lý nhiều công việc xen kẽ với nhau để tiết kiệm thời gian. 
- Mặt xấu là làm chương trình mình viết phức tạp lên, và ta phải hiểu rõ nguyên lý hoạt động của bất đồng bộ, nếu không sẽ dính những trường hợp như cái tiền đề chưa làm mà đã xử lý cái kết quả.

### Cơ chế hoạt động của Javascript.
- Call Stack: Vùng nhớ đặc biệt trên chip máy tính nhằm để phục vụ thực thi các dòng lệnh (cụ thể ở đây là các hàm). Stack là hàng đợi theo kiểu LIFO (Last In First Out) nghĩa là cái gì vào cuối thì ra đầu.
- Heap: vùng nhớ dùng để chứa kết quả tạm thời để thực thi các hàm trong stack.
- Callback Queue / Message Queue: khi các dòng lệnh cần thời gian chờ, ta sẽ khai báo các function callback xử lý sau khi dòng lệnh đó đã hoàn thành. Thì các task đó sẽ được đẩy vào đây. Queue là hàng đợi theo kiểu FIFO (First In First Out) có nghĩa cái gì vào trước là xử lý trước.
- Event Loop: có thể giải thích đơn giản là nó là một vòng lặp vô tận, và chỉ 1 công việc duy nhất là lấy các task từ Call Stack hoặc Callback Queue. Đầu tiên sẽ xử lý CallStack trước, sau khi Call Stack trống thì nó sẽ kiểm tra Callback Queue để thực hiện.

    <img src="apo.png" alt="">
    
## Promise
- Promise object đại diện cho việc hoàn thành kết quả (hoặc sự thất bại) từ một lệnh bất đồng bộ, và giá trị kết quả của lệnh đó.

- Mục đích của Promise là cơ chế của nó giúp bạn thực hiện các tác vụ đồng bộ hơn và tránh rơi vào tình trạng callback hell hay pyramid of doom, là tình trạng dùng các callback lồng nhau quá nhiều .
- Ta sẽ tạo promise object thông qua class Promise, class Promise lúc khởi tạo sẽ chứa 1 function để thực thi các tác vụ bất đồng bộ. Function sẽ có 2 tham số:

    - resolve: hàm được gọi khi promise hoàn thành.
    - reject: hàm được gọi khi có sự cố.

```js

var promise = new Promise(function(resolve, reject) {

    setTimeout(function() {
    
        resolve('foo');
    
    }, 1000);
    
});
    
promise.then(function(value) {
    
    console.log(value);
    
});
    
console.log(promise);
```

- Ta sẽ tạo ra một promise object; tại function bên trong, ta hẹn sau 1 giây sẽ gọi function resolve với kết quả ‘foo’.
- Để xử lý khi promise có kết quả ta sẽ dùng phương thức then, rồi viết callback trong đó log ra value khi mà có kết quả.

### Cơ chế hoạt động của Promise

- Khi mà ta sử dụng callback function, ta phải viết callback xử lý tính toán ngay lập tức (khi mà thực hiện các thao tác bất đồng bộ) nên khi mà xảy ra quá nhiều thao tác bất đồng bộ đang diễn ra, sẽ dẫn đến tình trạng các callback function lồng vào nhau.
