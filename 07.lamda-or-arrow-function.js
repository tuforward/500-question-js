/**
 * CÂU HỎI: BIỂU THỨC LAMDA HOẶC ARRAY FUNCTION LÀ GÌ?
 * 
 * TRẢ LỜI: 
    +   Không có argument
    +   Không có this
    +   Ngắn gọn súc tích
    +   Không có tính hoisting  
 */

const arrowFunc1 = (a, b) => a + b; // Multiple parameters
const arrowFunc2 = a => a * 10; // Single parameter
const arrowFunc3 = () => {} // no parameters


console.log(arrowFunc1(1, 2));
console.log(arrowFunc2(3));
console.log(arrowFunc3());