/**
 * CÂU HỎI: LÀM CÁCH NÀO ĐỂ CÓ THỂ XÓA ĐƯỢC COOKIE
 * 
 * TRẢ LỜI: 
    +   Lên trực tiếp DevTool Xóa
    +   Set Expire cho Cookie đó
 */

document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";

// LƯU Ý NÊN CHỈ ĐỊNH ĐƯỜNG DẪN KHI XÓA COOKIE

// MỘT SỐ TRANG WEB KHÔNG CHO XÓA COOKIE KHI CHƯA CHỈ ĐỊNH ĐƯỜNG DẪN