// 9. To'lov tizimi
// Payment
// ↓
// CardPayment
// ↓
// UzCardPayment
// Har bir klass o'z ma'lumotlarini chiqarsin va
// super() ishlatilsin.

class Payment {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  getInfo() {
    console.log(`Karta turi: ${this.name}, Balansi: ${this.balance}`);
  }
}

class CardPayment extends Payment {
  constructor(name, balance) {
    super(name, balance);
  }
}

class UzCardPayment extends Payment {
  constructor(name, balance) {
    super(name, balance);
  }
}

const payment = new Payment("Click", 100000);
payment.getInfo();

const cardPayment = new CardPayment("Visa", 200000);
cardPayment.getInfo();

const uzCardPayment = new UzCardPayment("Kapitalbank", 150000);
uzCardPayment.getInfo();
