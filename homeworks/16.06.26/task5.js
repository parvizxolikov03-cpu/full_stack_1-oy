// 5. Talaba Reytingi
// Student class yarating. #grades private property. addGrade(score), getAverage().
// static maxGrade = 100.

class Student {
  #grades = [];
  static maxGrade = 100;
  addGrade(score) {
    if (score < Student.maxGrade) {
      this.#grades.push(score);
    } else {
      console.log("Berilgan baho 100 dan oshmasin!");
    }
  }
  getAverage() {
    return Number((this.#grades.reduce((a, b) => a + b) / this.#grades.length).toFixed(2));
  }
}

const student = new Student();
student.addGrade(81);
student.addGrade(78);
student.addGrade(92);
console.log(student.getAverage());
