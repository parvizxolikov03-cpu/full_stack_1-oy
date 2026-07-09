
function barchaKitoblar(n){
    return n[0].map(el => el.nomi())
}




const a = [
  {
    id: 1,
    nomi: "Javascript asoslari",
    muallif: "Jahongir Xasanov",
    janr: "Dasturlash",
    narx: 80000,
    sotuvda: true,
  },
  {
    id: 2,
    nomi: "HTML va CSS sirlari",
    muallif: "Jahongir Xasanov",
    janr: "Web-Dizayn",
    narx: 65000,
    sotuvda: false,
  },
];

const jsonData = JSON.stringify(a);

const parseData = JSON.parse(jsonData)



console.log(barchaKitoblar(parseData))
