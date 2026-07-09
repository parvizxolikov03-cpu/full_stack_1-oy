// 17. Employee Management System 
// Klasslar: 
// Employee 
// ├── Developer 
// ├── Designer 
// └── Manager 
// Har birining: 
// calculateSalary() 
// metodi bo'lsin. 
// Manager uchun bonus qo'shilsin. 

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateSalary() {
        return this.salary;
    }
}

class Developer extends Employee {
    calculateSalary() {
        return this.salary;
    }
}

class Designer extends Employee {
    calculateSalary() {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.salary + this.bonus;
    }
}

const developer = new Developer("Ali", 5000);
console.log("Developer:", developer.calculateSalary());

const designer = new Designer("Vali", 4500);
console.log("Designer:", designer.calculateSalary());

const manager = new Manager("Sardor", 7000, 1500);
console.log("Manager:", manager.calculateSalary());
