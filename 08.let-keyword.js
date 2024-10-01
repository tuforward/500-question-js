/**
 * CÂU HỎI: TỪ KHÓA LET DÙNG VỚI MỤC ĐÍCH GÌ
 * 
 * TRẢ LỜI: 
    +   là phương thức khai báo biến cục bộ
    +   có thể thay đổi giá trị
    +   Phương pháp slice này cũng chấp nhận số âm đếm ngược về trước (-1)
 */

let counter = 30;

if (counter === 30) {
    let counter = 31;
    console.log(counter); // 31
}
console.log(counter); // 30 (because the variable in if block won't exist here)