// 1-topshiriq
// BankAccount klassi va balansni tekshirish
// • BankAccount classi yarating: owner, balance propertylari bo'lsin.
// • withdraw(amount) metodi yozing — agar amount balansdan katta bo'lsa, throw new
// Error("Mablag' yetarli emas") qiling.
// • Metodni try...catch bloki ichida chaqirib, xatolikni console.error() orqali chiqaring
// Maslahat: catch blokida error.message dan foydalaning.

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  withdraw(amount) {
    try {
      if (amount > this.balance) {
        throw new Error("Mablag' yetarli emas");
      } else {
        return (this.balance -= amount);
      }
    } catch (err) {
      return err.message;
    }
  }
}

const account = new BankAccount("Ali", 5000);
console.log(account.withdraw(6000));

// 2-topshiriq
// Animal va ovoz chiqarish (validatsiya bilan)
// • Animal classi yarating: name va sound parametrlarini constructor orqali oling.
// • Agar name bo'sh string bo'lsa, constructor ichida xatolik tashlang (throw).
// • 3 ta hayvon obyektini yaratishga harakat qiling (birida name ataylab bo'sh bo'lsin) va har
// birini alohida try...catch bilan o'rab, natijani konsolga chiqaring.
// Maslahat: constructor ichida ham throw ishlatish mumkin.

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;

    try {
      if (this.name == "") {
        throw new Error("Xoto");
      } else {
        console.log(this.name, this.sound);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}

const animal1 = new Animal("Cat", "Meow");
const animal2 = new Animal("", "Meow");
const animal3 = new Animal("Cow", "Moo");

// 3-topshiriq OSON
// Mahsulot narxini formatlash
// • Product classi: title, price propertylari.
// • getFormattedPrice() metodi narxni "$" + price.toFixed(2) ko'rinishida qaytarsin.
// • Agar price manfiy son bo'lsa, TypeError tashlansin va bu xatolik try...catch bilan
// ushlansin.

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  getFormattedPrice() {
    try {
      if (this.price < 0) {
        throw new TypeError();
      } else {
        return `${this.price.toFixed(2)}$`;
      }
    } catch (err) {
      return "Xoto";
    }
  }
}

const product = new Product("Apple", 500.5454);
const product1 = new Product("Banana", -5000);

console.log(product.getFormattedPrice());
console.log(product1.getFormattedPrice());

// 4-topshiriq
// Vehicle → Car merosxo'rligi va validatsiya
// • Vehicle ota classi: brand, speed propertylari, accelerate(value) metodi.
// • Car classi extends Vehicle qilib yaratilsin, qo'shimcha fuelLevel propertysi bo'lsin
// (super() ishlatilsin).
// • accelerate(value) metodini override qilib, agar fuelLevel 0 bo'lsa throw new
// Error("Yoqilg'i tugadi") qiling, aks holda super.accelerate(value) chaqiring.
// • Xatolikni try...catch bilan ushlab, finally blokida "Tekshirish yakunlandi" deb chiqaring.
// Maslahat: finally blok har doim ishga tushadi — xato bo'lsa ham, bo'lmasa ham.

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate() {}
}

class Car extends Vehicle {
  constructor(brand, speed, fuelLevel) {
    super(brand, speed);
    this.fuelLevel = fuelLevel;
  }
  accelerate(value) {
    try {
      if (this.fuelLevel < 0) {
        throw new Error("Yoqilg'i tugadi");
      } else {
        this.fuelLevel -= value;
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log("Tekshirish yakunlandi");
    }
  }
}

const car = new Car("BMW", 2, 2);
car.accelerate(1);
car.accelerate(1);







// 5-topshiriq O'RTA
// Encapsulation: maxfiy balans (private field)
// • SavingsAccount classida #balance (private field) yarating.
// • get balance() va set balance(value) getter/setterlarini yozing.
// • Setterda: agar value son bo'lmasa yoki manfiy bo'lsa, mos xato tashlang (TypeError yoki 
// RangeError).
// • 4 xil noto'g'ri qiymat bilan (masalan: "abc", -50) setterni chaqirib, har birini try...catch 
// bilan alohida ushlang va xato turini (error.name) chiqaring.

class SavingsAccount {
    #balance = 0
    get balance(){
        return this.#balance
    }
    setBalance(value){
        try {
            if (!value.isInteger()){
                throw new TypeError("int qiymat kiritmadingiz") 
            } else if (value < 0){
                throw new RangeError("Manfiy qiymat kiritdingiz")
            }
        } catch (err){
            console.error(err.name, err.message)
        }
    }
}
const acc = new SavingsAccount()
acc.setBalance("abc")
acc.setBalance(-100)
acc.setBalance("abcdf")
acc.setBalance(200)
console.log(acc.balance)