// Xây dựng ứng dụng quản lý khóa học và người dùng đăng ký khóa học.
// Một đối tượng khóa học sẽ bao gồm các thuộc tính và giá trị:
// 	id: id khóa học,
// 	name: tên khóa học,
// 	instructor: giáo viên dạy,
// 	students: [] ( danh sách người dùng đăng ký khóa học)
// Một đối tượng người dùng sẽ bao gồm các thuộc tính và giá trị:
// 	id: id người dùng,
// 	name: tên người dùng,
// 	registeredCourses: [] (danh sách khóa học user đã đăng ký học)
// Ứng dụng sẽ gồm các chức năng:

//1. Quản lý khóa học.
    // Thêm khóa học.
    // Tìm kiếm khóa học theo tên.
    // Xóa khóa học.
    // Khi xóa khóa học thì phải xóa tất cả id khóa học khỏi danh sách registeredCourses người dùng đã đăng ký.
    // Thoát.
//2. Quản lý người dùng.
    // Thêm người dùng mới.
    // Đăng ký khóa học.
    // Hủy đăng ký khóa học.
    // Hiển thị danh sách khóa học của một người dùng.
    // Thoát.
//3. Thoát.

class Course {
    constructor(id, name, instructor) {
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.students = [];
    }
}; 

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.registeredCourses = [];
    }
    registerCourse(course) {
        this.registeredCourses.push(course);
        course.students.push(this);
    }
    unregisterCourse(course) {
        this.registeredCourses = this.registeredCourses.filter(c => c.id !== course.id);
        course.students = course.students.filter(s => s.id !== this.id);
    }
};





let run = true;

while (run) {
    let command = +prompt(`
        1. Quản lý khóa học.
        2. Quản lý người dùng
        3. Thoát
        Enter the command: `);
    switch (command) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            run = false;
            console.log("Out of program");
            break;
        default:
            console.log("Invalid command. Enter again!");
            break;
    }
}   