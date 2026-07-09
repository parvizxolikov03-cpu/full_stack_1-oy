// 3 3-topshiriq: getUser — birinchi await
// getUser(id) nomli async funksiya yozing — u setTimeout ichida { id, name: "Ali" }
// obyektini qaytarsin. Uni await bilan chaqirib, natijani konsolga chiqaring.

function getUserStart(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Ali" });
    }, 1000);
  });
}

async function getUser(id){
    const user = await getUser(id)
}