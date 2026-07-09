// 24. Bir nechta hujjatlar objectlari berilgan. Qaysi hujjatlar
// tekshirilganligini WeakSet orqali belgilang.


const doc1 = { title: "Passport" };
const doc2 = { title: "ID Card" };
const doc3 = { title: "Driver License" };

const verifiedDocs = new WeakSet();

verifiedDocs.add(doc1);
verifiedDocs.add(doc3);

console.log(verifiedDocs.has(doc1)); 
console.log(verifiedDocs.has(doc2)); 
console.log(verifiedDocs.has(doc3)); 