/**
 * CÂU HỎI: CLASS TRONG JS
 * 
 * TRẢ LỜI: Class là tính năng mới trong ES6 vừa được tung ra, được sử dụng để tạo OBJECT 
 */

class Person {
    // hàm tạo constructor
    constructor(name) {
        this.name = name; 
    }

    // ta không cần khởi tạo biến name
    // this.name sẽ thay ta khởi tạo biến name
}

var obj = new Person("Giang Trường");

console.log(obj);