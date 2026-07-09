// 17. Online Kurs
// Course class yarating. #students. enroll(studentName), getStudentsCount().
// static totalCourses

class Course {
  #students = [];
  static totalCourses;

  enroll(studentName) {
    this.#students.push(studentName);
  }
  getStudentsCount() {
    return this.#students.length;
  }
}

const student = new Course();
student.enroll("Ali");
student.enroll("Vali");
student.enroll("Sami");

console.log(student.getStudentsCount());
