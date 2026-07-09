// 5.student object yarating.
// Propertylar:
// math
// english
// physics
// average getter yozing.

const student = {
  math: 90,
  english: 85,
  physics: 95,

  get average() {
    return (this.math + this.english + this.physics) / 3;
  }
};

console.log(student.average); 