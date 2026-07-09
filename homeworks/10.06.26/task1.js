class Car {
  constructor(brand, model, maxspeed) {
    this.brand = brand;
    this.model = model;
    this.maxspeed = maxspeed;
  }
  harakatlan() {
    return `${this.brand}${this.model} harakatlanmoqda, max: ${this.maxspeed} km/h`;
  }
}
class ElectroCar extends Car {
  constructor(brand, model, maxspeed, battery) {
    super(brand, model, maxspeed);
    this.battery = battery;
  }
  zaryadla() {
    return `${this.brand}${this.model} ning ${this.battery} zaryad olmoqda`;
  }
}

const car = new Car("Toyota", "Camry", 180);
console.log(car.harakatlan());

const electroCar = new ElectroCar("Tesla", "Model 3", 250, 75);
console.log(electroCar.zaryadla());
