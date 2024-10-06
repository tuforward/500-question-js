//  **** MỘT SỐ CÁCH SỬ DỤNG REDUCE ****    //
const totalPointClass = (students) => {
    // Lấy ra danh sách học sinh các lớp
    let getArryClass = students.reduce((classs, student) => {
        if(classs[student.lop]) {
            // nếu đã tồn tại cái lớp này
            classs[student.lop] += student.diem;
        }

        else {
            // nếu chưa tồn tại lớp này từ trước
            classs[student.lop] = student.diem;
        }

        return classs;
    }, {}); // Giá trị khởi tạo ban đầu là 1 object

    return getArryClass;
}

//  **** MỘT SỐ CÁCH SỬ DỤNG REDUCE ****    //
const groupedStudents = studentss.reduce((groups, item) => {
    if (groups[item.gioiTinh]) { // Mỗi vòng lặp kiểm tra xem trong object khởi tạo ban đầu có key là Nam hay Nữ chưa
      groups[item.gioiTinh].push(item.hoTen); // Nếu có rồi thì thêm họ tên vào key tương ứng
    } 
    else {
      groups[item.gioiTinh] = [item.hoTen]; // Nếu chưa có tạo ra key là Nam hoặc Nữ, giá trị là một mảng
    }
    return groups;
}, {}); // Giá trị khởi tạo ban đầu là 1 object
  
console.log(groupedStudents);