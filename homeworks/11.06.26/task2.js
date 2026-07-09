// 2. employee objectidagi barcha property
// descriptorlarini
// Object.getOwnPropertyDescriptors() yordamida
// chiqaring.

function info(employee){
    return Object.getOwnPropertyDescriptors(employee)
}



const employee = {
    model : "bmw",
    price : 50000,
    color : "black"
}
console.log(info(employee))