/**
 * CÂU HỎI: CÓ BAO NHIÊU CÁCH KHỞI TẠO OBJECT
 * 
 * TRẢ LỜI: CÓ NHIỀU CÁCH ĐỂ KHỞI TẠO MỘT OBJECT
 */

/**
 * CÁCH 1:      OBJECT LITERAL SYNTAX
 * 
 * ƯU ĐIỂM:
    +   Cú pháp đơn giản
 */

var obj_01 = {
    name: "Giang Trường",
    age: 20
};

console.log("cách 01", obj_01);

/**---------------------------------------------------------------------- */

/**
 * CÁCH 2:      OBJECT CONSTRUCTOR
 */

var obj_02_cach_1 = new Object();

// Vi Object() là một hàm built-in nên ta có thể bỏ lun cả từ khóa new
var obj_02_cach_2 = Object();

console.log("cách 02.1",obj_02_cach_1);
console.log("cách 02.2",obj_02_cach_2);


/**---------------------------------------------------------------------- */

/**
 * CÁCH 3:      OBJECT CREATE METHOD
 * 
 * LƯU Ý: ĐỪNG CÓ SÀI CÁCH 3, tui sài thử thấy hem được
 * 
 * Phương thức (method) CREATE dùng để tạo một OBJECT mới nhưng sẽ được truyền thêm arguments vào,
 * 
 * Có thể truyền các biến (variable) có sẵn để làm thuộc tính (properties) trong OBJECT
 */

let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
}

let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    }
}

var obj_03_cach_1 = Object.create(null);

var obj_03_cach_2 = Object.create(vehicle, carProps);

var car = Object.create({vehicle, carProps});

console.log("cách 03.1", obj_03_cach_1);

console.log("cách 03.2", obj_03_cach_2);


  