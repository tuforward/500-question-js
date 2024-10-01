/**
 * CÂU HỎI: Hoisting LÀ GÌ ?
 * 
 * TRẢ LỜI: 
    +   Hoisting là một cơ chế trong Javascript
    +   Bao gồm:
            +   Biến
            +   Khai Báo Hàm
            +   Class
    +   Khi có tính hoisting bạn sử dụng biến trước khi khai báo vẫn được
 */


/** -----------------VÍ DỤ 01-----------------*/

console.log(vidu_01); // output: undefined
var vidu_01 = 10;

// =>   Ta thấy dù biến chưa được khai báo nhưng cũng sẽ không báo lỗi chương trình. Đây chính là đặc tính của biến hoisting


/** -----------------VÍ DỤ 02-----------------*/

vidu_02("Giang Trường"); // output: Giang Trường

function vidu_02(name) {
    console.log(name);
}

// Đối với Declaration Function thì sẽ có tính hoisting
// =>   Và nó cho phép sử dụng hàm trước khi khai báo (lưu ý chỉ là trong lúc gõ code)


/**             KẾT LUẬN
 *  Chỉ có Declaration Function mới có tính Hoisting
 */