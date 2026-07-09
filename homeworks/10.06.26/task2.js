// 2. Berilgan yil kabisa yili ekanligini Date yordamida tekshiring.

function kabisaYili(yil) {
    return new Date(yil, 2, 0).getDate() === 29;
}

console.log(kabisaYili(2024)); 
console.log(kabisaYili(2025)); 