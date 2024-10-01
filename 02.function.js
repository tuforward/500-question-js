/**
 * CÂU HỎI: CÁCH KHỞI TẠO FUNCTION
 * 
 * TRẢ LỜI: CÓ NHIỀU CÁCH ĐỂ KHỞI TẠO MỘT OBJECT
 */

/**
 * CÁCH 1:      FUNCTION CONSTRUCTOR
*/

function Person_Vidu_01(name) {
    this.name = name;
    this.age = 21;
};

var obj_vidu_01 = new Person_Vidu_01("Giang Trường");

console.log("Cách 01",obj_vidu_01);


/**
 * CÁCH 2:      FUNCTION PROTOTYPE CONSTRUCTOR
 * 
 * Tương tự như function constructor nhưng nó sử dụng prototype nguyên mẫu cho các thuộc tính của nó
*/

function Person_Vidu_02() {};

Person_Vidu_02.prototype.name = "Giang Trường"; // Sử dụng prototype

var obj_vidu_02 = new Person_Vidu_02();

console.log("Cách 02", obj_vidu_02.name);