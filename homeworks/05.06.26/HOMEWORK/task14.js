let mahsulotlar = [ 
{nomi: "Telefon", narx: 2000000}, 
{nomi: "Naushnik", narx: 50000}, 
{nomi: "Powerbank", narx: 80000} 
];

console.log(mahsulotlar.filter(n => n["narx"] < 100000))