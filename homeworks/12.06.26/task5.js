// 5. Device va Laptop 
// Device: 
// brand 
// model 
// Laptop: 
// ram 
// RAM 16 GB yoki undan yuqori bo'lsa "High 
// Performance" deb qaytarsin. 

class Device{
    constructor(brand, laptop){
        this.brand = brand
        this.laptop = laptop
    }
}

class Laptop extends Device{
    constructor(brand, laptop, ram){
        super(brand, laptop)
        this.ram = ram
    }
    getInfo(){
        console.log(this.ram > 16 ? "High Perfomace" : "Perfomance")
    }
}
const laptop = new Laptop("Apple", "MacBook M2", 32 )
laptop.getInfo()