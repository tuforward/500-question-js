/**
 * CÂU HỎI: LÀM SAO ĐỂ ĐỊNH NGHĨA LẠI BIẾN TRONG KHỐI SWITCH MÀ CÓ THỂ TRÁNH ĐƯỢC LÔI
 * 
 */

/**         CÚ PHÁP GÂY LỖI */

// let counter = 1;
// switch (counter) {
//   case 0:
//     let name;
//     break;

//   case 1:
//     let name; // SyntaxError for redeclaration.
//     break;
// }

/** --------------------------------------------------------------------- */

/**         CÚ PHÁP KHÔNG GÂY LỖI */

// ĐÓ CHÍNH LÀ THÊM DẤU {} ngay chổ case sẽ tránh được lỗi nhe, vì khi đó mình đã tạo ra một khối riêng biệt

let counter = 1;
switch (counter) {
  case 0: {
    let name;
    break;
  }
  
  case 1: {
    let name; // No SyntaxError for redeclaration.
    break;
  }
}