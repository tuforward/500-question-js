/**
 * CÂU HỎI: LÀM THẾ NÀO ĐỂ MÃ HÓA VÀ GIẢI MÃ URL
 * 
 */

let uri = "employeeDetails?name=john&occupation=manager";
// mã xóa url
let encoded_uri = encodeURI(uri);
console.log(encoded_uri);

// giải mã url
let decoded_uri = decodeURI(encoded_uri);
console.log(decoded_uri);

