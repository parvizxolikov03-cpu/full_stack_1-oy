// 1. car objectida model propertysi yarating.
// Descriptorlarini chiqarib bering.


function info(car){
    return Object.getOwnPropertyDescriptor(car, "model")
}



const car = {
    model : "bmw"
}
console.log(info(car))