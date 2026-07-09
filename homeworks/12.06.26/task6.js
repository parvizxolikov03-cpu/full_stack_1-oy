// 6. E-Commerce tizimi 
// User 
// ↓ 
// Customer 
// Property: 
// ordersCount 
// Agar: 
// ordersCount > 20 
// bo'lsa: 
// VIP Customer 
// deb chiqarsin. 

class User{
    constructor(name){
        this.name = name
    }
}

class Customer extends User{
    constructor(name, ordersCount){
        super(name)
        this.ordersCount = ordersCount
        
    }
    getStatus(){
        console.log(this.ordersCount > 20 ? "Vip Customer" : "Customer")
    }
}

const customer = new Customer("Eshmat", 24)
customer.getStatus()