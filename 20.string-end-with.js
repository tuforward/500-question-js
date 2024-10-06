/**
 * CÂU HỎI: METHOD ENDWITH TRONG STRING DÙNG LÀM GÌ ?
 * 
 * TRẢ LỜI: 
    +   để kiểm tra xem cuối chuỗi có tồn tại ký tự đang chỉ định hay không
 */

function jazzify(chords) {
    // Duyệt qua từng hợp âm trong mảng
    for (let i = 0; i < chords.length; i++) {
        // Nếu hợp âm không kết thúc bằng 7, thêm 7 vào cuối
        if (!chords[i].endsWith("7")) { // Hàm endsWith() để kiểm tra xem cuối chuỗi có tồn tại ký tự đang chỉ định hay không
            chords[i] += "7";
        }
    }
    return chords;
}
    
// Kiểm tra các trường hợp
console.log(jazzify(["G", "F", "C"])); // ➞ ["G7", "F7", "C7"]
console.log(jazzify(["Dm", "G", "E", "A"])); // ➞ ["Dm7", "G7", "E7", "A7"]
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
console.log(jazzify([])); // ➞ []