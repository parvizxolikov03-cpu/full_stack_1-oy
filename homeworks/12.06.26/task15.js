// 15. Universitet tizimi
// Person
// ↓
// Student
// ↓
// GraduateStudent
// Har bir klass qo'shimcha ma'lumot qo'shib
// chiqarsin.

class Person {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `Ism: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, faculty) {
    super(name);
    this.faculty = faculty;
  }

  getInfo() {
    return `${super.getInfo()}, Fakultet: ${this.faculty}`;
  }
}

class GraduateStudent extends Student {
  constructor(name, faculty, thesisTopic) {
    super(name, faculty);
    this.thesisTopic = thesisTopic;
  }

  getInfo() {
    return `${super.getInfo()}, Dissertatsiya mavzusi: ${this.thesisTopic}`;
  }
}

const graduate = new GraduateStudent(
  "Ali",
  "Dasturiy injiniring",
  "Sun'iy intellekt",
);

console.log(graduate.getInfo());
