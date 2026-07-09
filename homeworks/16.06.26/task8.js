// 8. Avtomobil
// Car class yarating. brand va #speed. accelerate(value), brake(value), getSpeed().
// static maxSpeed = 300.

class Car {
  #speed = 0;
  static maxSpeed = 300;

  accelerate(value) {
    if (this.#speed < Car.maxSpeed) {
      this.#speed += value;
    } else {
      return "Max tezlik 300!";
    }
  }
  brake(value) {
    this.#speed -= value;
  }
  getSpeed() {
    return this.#speed;
  }
}
const car = new Car();
car.accelerate(120);
car.accelerate(10);
car.accelerate(50);
car.brake(50);

console.log(car.getSpeed());
