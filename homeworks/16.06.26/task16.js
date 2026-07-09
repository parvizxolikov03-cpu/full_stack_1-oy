// 16. Ishchi Maoshi
// Employee class yarating. #salary. increaseSalary(percent),
// getSalary(). static companyName

class Employee {
  #salary = 0;
  static companyName;

  increaseSalary(persent) {
    this.#salary += persent;
  }

  getSalary() {
    return this.#salary;
  }
}

const employee = new Employee();
employee.increaseSalary(500);
console.log(employee.getSalary());
