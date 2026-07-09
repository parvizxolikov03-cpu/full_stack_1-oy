// 10. Telefon Batareyasi
// Phone class yarating. #battery. charge(amount), use(amount). Batareya 0–100 oralig‘ida bo‘lsin.
// static maxBattery = 100.

class Phone {
  #battery = 0;
  static maxBattery = 100;

  charge(amount) {
    if (this.#battery < Phone.maxBattery) {
      this.#battery += amount;
    } else {
      NaN;
    }
  }
  use(amount) {
    if (this.#battery > 0) {
      this.#battery -= amount;
    } else {
      NaN;
    }
  }
  getBattery() {
    return this.#battery;
  }
}

const phone = new Phone();
phone.charge(15);
phone.charge(25);
phone.use(10);
console.log(phone.getBattery());
