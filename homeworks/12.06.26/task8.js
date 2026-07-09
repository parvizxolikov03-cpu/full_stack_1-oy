// 8. Onlayn kurs platformasi 
// Course 
// ↓ 
// ProgrammingCourse 
// Qo'shimcha: 
// language 
// studentsCount 
// Kurs mashhurligini aniqlang. 

class Course{
    constructor(courseType){
        this.courseType = courseType
    }
}

class ProgrammingCourse extends Course{
    constructor(courseType, studentsCount){
        super(courseType)
        this.studentsCount = studentsCount
        
    }
    getInfo(){
        console.log(this.studentsCount > 10 ? "Mashhur kurs" : "Mashhur emas")
    }
}

const programmingCourse = new ProgrammingCourse("Backend", 21)
programmingCourse.getInfo()