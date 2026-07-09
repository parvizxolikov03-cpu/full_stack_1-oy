// 11. salary propertysi mavjud object yarating.
// Uni:
// ● writable: false
// ● enumerable: false
// ● configurable: false
// qilib belgilang va barcha cheklovlarni
// tekshiring.

const employee = {};

Object.defineProperty(employee, "salary", {
    value: 10000,
    writable: false,
    enumerable: false,
    configurable: false
});

employee.salary = 20000;
console.log(employee.salary); 

console.log(Object.keys(employee)); 

for (let key in employee) {
    console.log(key); 
}

delete employee.salary;
console.log(employee.salary); 

console.log(
    Object.getOwnPropertyDescriptor(employee, "salary")
);