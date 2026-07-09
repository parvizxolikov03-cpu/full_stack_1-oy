//  Musbat va manfiy O'rta
// Massivni ikkiga ajrating: musbatlar va manfiylar. Natija obyekt bo'lsin. Misol: [-1,2,-3,4] ->
// {musbat:[2,4], manfiy:[-1,-3]}.

const arr = [-1, 2, -3, 4]

const obj = {"musbat" : [], "manfiy" : []}

for (let i of arr){
    if(i > 0){
        obj["musbat"].push(i)
    } else {
        obj["manfiy"].push(i)
    }
}
console.log(obj)