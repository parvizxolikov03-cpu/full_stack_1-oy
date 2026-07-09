//  Bugungi kundan 50 kun oldingi sanani toping.

function daysAgo() {
    const date = new Date();
    date.setDate(date.getDate() -50);
    return date;
}

console.log(daysAgo());