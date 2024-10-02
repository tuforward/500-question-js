/**
 * CÂU HỎI: MỤC ĐÍCH CỦA PHƯƠNG PHÁP SPLICE (CHÈN, XÓA) ARRAY LÀ GÌ ?
 * 
 * TRẢ LỜI: 
    +   Method Splice cho phép CHÈN/XÓA item trong mảng
    +   Trả về item bị xóa (nếu có item bị xóa)
    +   Ảnh hưởng lên mảng khi sử dụng phương pháp splice
 */

/**
 * arg (1)  : index của phần tử muốn xóa/chèn
 * arg (2)  : số lượng phần tử muốn xóa (nếu để 0 thì nghĩa là không xóa mà chèn)
 * arg (...): Phần tử muốn chèn
 */

let arr_01 = [1, 2, 3, 4, 5];
let arr_02 = [1, 2, 3, 4, 5];
let arr_03 = [1, 2, 3, 4, 5];

// XÓA 2 PHẦN TỬ ĐẦU TIÊN 
let xoa = arr_01.splice(0, 2);
console.log(arr_01);
console.log(xoa);

// CHÈN 2 Phần tử vào vị trí thứ 2
let chen = arr_02.splice(1, 0, 10, 11);
console.log(arr_02);
console.log(chen); // vì không xóa phần tử nào nên trả về array empty

// XÓA 1 PHẦN TỬ Ở VỊ TRÍ CUỐI XONG CHÈN 2 PHẦN TỬ VÀO VỊ TRÍ CUỐI
let xoa_va_chen = arr_03.splice(4, 1, 15, 16);
console.log(arr_03);
console.log(xoa_va_chen);