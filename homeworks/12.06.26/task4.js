// 4. Person va Teacher 
// Teacher klassi: 
// subject 
// experience 
// o'z ichiga olsin. 
// Tajriba 5 yildan katta bo'lsa "Senior Teacher" 
// qaytarsin. 

class Person{
    constructor(subject, experience){
        this.subject = subject
        this.experience = experience
    }
}

class Teacher extends Person{
    constructor(subject, experience){
        super(subject)
    }
    getInfo(){
        console.log(this.experience > 5 ? "Senior Teacher" : "Teacher")
    }
}

const teacher = new Teacher("Matematic", 7)
teacher.getInfo()