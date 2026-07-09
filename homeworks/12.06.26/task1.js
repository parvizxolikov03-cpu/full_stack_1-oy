// 1. Animal va Dog 
// Animal: 
// name 
// age 
// Dog: 
// breed 
// Dog ma'lumotlarini chiqaruvchi metod yozing. 

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed
    }
    getInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`)
    }
}

const dog = new Dog('Rex', 5, 'Anonim')
dog.getInfo()