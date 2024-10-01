/**
 *  CÂU HỎI: Sự Khác Biệt Giữa Toán Tử == Và === Là Gì ?
 * 
 *  Javascript cũng cấp 2 toán tử so sánh nghiêm ngặt là === và !==
 * 
 *  Các toán tử nghiêm ngặt (strict operator) sẽ xem xét kiểu dữ liệu của biến
 * 
 *  Các toán tử không nghiêm ngặt sẽ hiệu chỉnh/ chuyển đổi kiểu dữ liệu của biến   
 */

//  Kiểu Số & Chuỗi
let vidu_01 = (10 == "10");     // không nghiêm ngặt => true
let vidu_02 = (10 === "10");    // nghiêm ngặt => false

console.log("ví dụ 1", vidu_01);
console.log("ví dụ 2", vidu_02);
console.log("------------------");

// Kiểu Số & Chuỗi
let vidu_03 = (10 != "10")      // không nghiêm ngặt => false
let vidu_04 = (10 !== "10")     // nghiêm ngặt => true

console.log("ví dụ 3", vidu_03);
console.log("ví dụ 4", vidu_04);
console.log("------------------");

//  Kiểu Undefined và Null
let vidu_05 = (undefined == null)   // không nghiêm ngặt => true
let vidu_06 = (undefined === null)  // nghiêm ngặt => false

console.log("ví dụ 5", vidu_05);
console.log("ví dụ 6", vidu_06);
console.log("------------------");

//  Kiểu NaN khi so sánh với undefined hoặc null đều => false hết
let vidu_07 = (NaN == undefined)   // không nghiêm ngặt => true
let vidu_08 = (NaN === null)  // nghiêm ngặt => false
let vidu_09 = (NaN == NaN)    
let vidu_10 = (NaN === NaN)

// KẾT LUẬN: NaN khi so sánh với chính nó dù nghiêm ngặt hay không đều false hết

// NaN so sánh với biến nào cũng false hết á

console.log("ví dụ 7", vidu_07);
console.log("ví dụ 8", vidu_08);
console.log("ví dụ 9", vidu_09);
console.log("ví dụ 10", vidu_10);
console.log("------------------");