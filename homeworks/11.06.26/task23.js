// 7.car object yarating.
// Propertylar:
// brand
// model
// year
// info getter yozing.
// Natija:
// BMW X5 (2024)

const car = {
  brand: "BMW",
  model: "X5",
  year: 2024,

  get info() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
};

console.log(car.info); 