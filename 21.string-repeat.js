/**
 * CÂU HỎI: METHOD REPEAT TRONG STRING DÙNG LÀM GÌ ?
 * 
 * TRẢ LỜI: 
    +   Dùng để tạo một chuỗi có N kí tự lặp lại
 */

/**     VÍ DỤ
 *  str = "#".repeat(5);
 *  
 *  Kết quả: "#####""
 */

function TaokiTu (kiTu, doDai) {
    let ans = kiTu.repeat(doDai); // tạo một chuỗi kí tự lặp lại n lần
    return ans;
}

let vidu_01 = TaokiTu("*", 5);

console.log(vidu_01);