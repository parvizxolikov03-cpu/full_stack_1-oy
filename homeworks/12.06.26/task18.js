// 18. Transport Management
// Vehicle
// ├── Car
// ├── Bus
// └── Truck
// Har biri yoqilg'i sarfini hisoblasin.

class Vehicle {
  constructor(fuelPerKm) {
    this.fuelPerKm = fuelPerKm;
  }

  calculateFuel(distance) {
    return this.fuelPerKm * distance;
  }
}

class Car extends Vehicle {
  calculateFuel(distance) {
    return this.fuelPerKm * distance;
  }
}

class Bus extends Vehicle {
  calculateFuel(distance) {
    return this.fuelPerKm * distance;
  }
}

class Truck extends Vehicle {
  calculateFuel(distance) {
    return this.fuelPerKm * distance;
  }
}

const car = new Car(0.08);
console.log("Car:", car.calculateFuel(100), "L");

const bus = new Bus(0.25);
console.log("Bus:", bus.calculateFuel(100), "L");

const truck = new Truck(0.35);
console.log("Truck:", truck.calculateFuel(100), "L");
