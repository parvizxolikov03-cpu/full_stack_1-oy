function addStudent(students) {
  students.splice(0, 1, "Aziz", "Javlon");
  return students;
}

let talabalar = ["Anvar", "Botir", "Dilshod", "Eldor"];

addStudent(talabalar);
console.log(talabalar);
