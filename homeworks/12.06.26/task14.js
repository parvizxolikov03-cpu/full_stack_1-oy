// 14. Food Delivery 
// Product 
// ↓ 
// Food 
// Property: 
// expirationDays 
// Mahsulot yaroqliligini tekshiruvchi metod yozing. 

class Product {
    constructor(name) {
        this.name = name;
    }
}

class Food extends Product {
    constructor(name, expirationDays) {
        super(name);
        this.expirationDays = expirationDays;
    }

    checkValidity() {
        if (this.expirationDays > 0) {
            return "Mahsulot yaroqli";
        }
        return "Mahsulot yaroqsiz";
    }
}

const food1 = new Food("Non", 5);
console.log(food1.checkValidity()); 
