function pushProduct(product) {
  savat.push(product);
  return savat;
}

function popProduct(product) {
  savat.pop(product);
  return savat;
}

let savat = [];

pushProduct("olma");
pushProduct("banan");
popProduct();

console.log(savat);
