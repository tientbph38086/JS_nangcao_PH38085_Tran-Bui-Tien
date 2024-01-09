// Hiển thị số và chuỗi
console.log(100);           // Log số
console.log('Xin chào thế giới');  // Log chuỗi

// Hiển thị nhiều giá trị
console.log(20, 'Xin chào', true);  // Log nhiều giá trị

// Hiển thị giá trị của biến
const x = 100;
console.log(x);  // Log giá trị của biến

// Hiển thị lỗi và cảnh báo
console.error('Cảnh báo');  // Log lỗi
console.warn('Cảnh báo'); // Log cảnh báo

// Hiển thị đối tượng dưới dạng bảng
console.table({ tên: 'Brad', email: 'brad@gmail.com' });  // Log đối tượng dưới dạng bảng

// Nhóm các lệnh console lại với nhau
console.group('đơn giản');    // Bắt đầu một nhóm
console.log(x);
console.error('Cảnh báo');
console.warn('Cảnh báo');
console.groupEnd();          // Kết thúc nhóm

// Thêm CSS vào các log
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cXin chào thế giới', styles);  // Áp dụng CSS vào đầu ra log
