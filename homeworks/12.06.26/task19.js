// 19. Hospital System
// Person
// ├── Doctor
// └── Patient
// Doctor va Patient ma'lumotlarini super() orqali
// hosil qiling.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Doctor extends Person {
  constructor(name, age, specialty) {
    super(name, age);
    this.specialty = specialty;
  }

  getInfo() {
    return `Shifokor: ${this.name}, Yosh: ${this.age}, Mutaxassisligi: ${this.specialty}`;
  }
}

class Patient extends Person {
  constructor(name, age, disease) {
    super(name, age);
    this.disease = disease;
  }

  getInfo() {
    return `Bemor: ${this.name}, Yosh: ${this.age}, Kasalligi: ${this.disease}`;
  }
}

const doctor = new Doctor("Akmal", 45, "Kardiolog");
console.log(doctor.getInfo());

const patient = new Patient("Ali", 20, "Gripp");
console.log(patient.getInfo());
