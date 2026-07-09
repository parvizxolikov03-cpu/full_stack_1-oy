// Bugungi kundan 100 kun keyingi sanani toping.

function addDays() {
    const date = new Date();
    date.setDate(date.getDate() + 100);
    return date;
}

console.log(addDays());