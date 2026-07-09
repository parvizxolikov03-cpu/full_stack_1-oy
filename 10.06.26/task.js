// Bugungi sanani  “ DD/MM/YYYY ” shu formatida 
// korsatadigan bugungiSana() nomli  funksiya yozing.

function bugungiSana(){
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

console.log(bugungiSana())