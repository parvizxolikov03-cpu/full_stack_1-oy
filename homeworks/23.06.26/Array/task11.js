// 11 Massivni saralash O'rta
// Sonlarni o'sish tartibida saralang (o'zingiz algoritm yozing, sort() ishlatmasdan). Misol:
// [3,1,2] -> [1,2,3].

const arr = [3,1,2]

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(i < j){
            i = j
        }
    }
}