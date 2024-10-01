/**
 * CÂU HỎI: JSON LÀ GÌ ? HOẠT ĐỘNG CỦA NÓ
 * 
 * TRẢ LỜI: 
    +   JSON là định dạng văn bản nhưng theo cú pháp OBJECT của JS
    +   Giúp truyền dữ liệu qua mạng dễ dàng
    +   Về cơ bản, nó chỉ là một tệp văn bản có đuôi là.json
 */

/**
 * CÓ 2 PHƯƠNG THỨC THÔNG DỤNG
 * 
 * TEXT (JS) TO JS: Nghĩa là văn bản JSON chuyển qua JS
 * 
 * JS TO TEXT: Nghĩa là OBJECT JS chuyển qua JS
 */

// JS TO JSON (TEXT)
var obj_js = {
    name: "Giang Trường",
    age: 20
};

var toJSON = JSON.stringify(obj_js);
console.log("CHUỖI JSON",toJSON);

// JSON (TEXT) TO JS
// LƯU Ý BIỂU DIỄN CHUỖI JSON NÊN DÙNG DẤU BACKTICK
var chuoi_json = `{"name":"Giang Trường","age":20}`;

var toJS = JSON.parse(chuoi_json);
console.log("CHUỖI JS",toJS);