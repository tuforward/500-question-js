/**
 * CÂU HỎI: METHOD INCLUDES TRONG STRING DÙNG LÀM GÌ ?
 * 
 * TRẢ LỜI: 
    +   Trả về true hoặc false
    +   Kiểm tra xem trong chuỗi có tồn tại một chuỗi con không 
 */

const duoiFile_03 = file => {
    if(file.includes(".")) {
        return file.split(".").pop();
    }

    return "Không phải là file";
}
    
let vidu_01 = duoiFile_03("html.css.gov");

console.log(vidu_01);