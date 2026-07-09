// 13. Taksi tizimi 
// Vehicle 
// ↓ 
// Taxi 
// Property: 
// pricePerKm 
// Masofa bo'yicha narx hisoblang. 

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

class Taxi extends Vehicle {
    constructor(brand, pricePerKm) {
        super(brand);
        this.pricePerKm = pricePerKm;
    }

    calculatePrice(distance) {
        return distance * this.pricePerKm;
    }
}

const taxi = new Taxi("Chevrolet", 3000);

console.log(taxi.calculatePrice(10)); 