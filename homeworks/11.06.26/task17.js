// 1.person object yarating.
// Propertylar:
// firstName
// lastName
// fullName getter yozing.
// Natija:
// person.fullName
// Ali Valiyev



const person = {
  firstName: "Ali",
  lastName: "Valiyev",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName); 