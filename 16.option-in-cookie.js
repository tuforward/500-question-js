/**
 * CÂU HỎI: CÓ NHỮNG [OPTION] NÀO TRONG COOKIE ?
 * 
 */

/**
 * THEO MẶC ĐỊNH COOKIE SẼ BỊ XÓA KHI BẠN ĐÓNG TRÌNH DUYỆT
 * 
 * BẠN CÓ THỂ THAY ĐỔI HÀNH VI NÀY BẰNG CÁCH SET EXPIRE
 */
document.cookie = "hoVaTen=GiangTruong; expires=Sat, 8 Jun 2019 12:00:00 UTC";

/**
 * THEO MẶC ĐỊNH COOKIE SẼ THUỘC VỀ TRANG WEB HIỆN TẠI
 * 
 * BẠN CÓ THỂ CHO COOKIE BIẾT NÓ THUỘC VỀ ĐƯỜNG DẪN NÀO BẰNG CÁCH SET ĐƯỜNG DẪN
 */
document.cookie = "username=John; path=/services";