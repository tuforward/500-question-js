/**
 * CÂU HỎI: MỤC ĐÍCH CỦA PHƯƠNG PHÁP SLICE (CẮT) ARRAY LÀ GÌ ?
 * 
 * TRẢ LỜI: 
    +   Phương thức slice trả về một mảng mới
    +   Không gây ảnh hưởng lên mảng bị cắt
    +   Phương pháp slice này cũng chấp nhận số âm đếm ngược về trước (-1)
 */

let arr = [1, 2, 3, 4, 5];

let arrayIntegers_01 = arr.slice(0, 2);
let arrayIntegers_02= arr.slice(-3, -1);

console.log("Mảng ban đầu", arr);
console.log(arrayIntegers_01);
console.log(arrayIntegers_02);

/**
 * KẾT LUẬN
 * 
 * METHOD SLICE KHÔNG LÀM THAY ĐỔI MẢNG GỐC
 * 
 * TRẢ VỀ MỘT MẢNG MỚI
 */