import promptSync from 'prompt-sync';
export const prompt = promptSync();

function showInfo(){
    console.log("\n======================================================================");
    console.log("\n                      🎮 MATH GAME                                 ");
    console.log("\n======================================================================");

    console.log("======================================================================");
    console.log("                      O'yin qoidalari:                                 ");
    console.log("======================================================================");

    console.log("Sizning vazifangiz - berilgan matematik misollarni");
    console.log("imkon qadar tez va to'g'ri ishlash!\n");

    console.log("======================================================================");
    console.log("                   Darajalar haqida ma'lumot                          ");
    console.log("======================================================================");
    
    console.log("Oson: Faqat Qo'shish (+) va ayirish (-)");
    console.log("O'rtacha: 10 ta misol (+, -, *, /)");
    console.log("Qiyin: 3 ta sonli murakkab misollar (a + b * c)\n");

    console.log("======================================================================");
    console.log("            Ochko hisoblash tizimi (Tezlikka qarab):                  ");
    console.log("======================================================================");

    console.log("⚡ 3-5 soniyada topsangiz: 3 ball");
    console.log("⌛ 5-7 soniyada topsangiz: 2 ball");
    console.log("🐢 7+ soniyada topsangiz: 1 ball");
};
export function startGame(){
    showInfo();
    let enter = prompt("\nEnter ");
    
    console.clear();
    while(enter !== ""){
        enter = prompt("O'yinni boshlash uchun faqat Enter bosing! ")
    }

    let isRun = true;
    let level = 0;
    
    while(isRun){
        console.log("\n Darajani tanlang");
        console.log("1 - Oson");
        console.log("2 - O'rta");
        console.log("3 - Qiyin");
        console.log("0 - Dasturdan chiqish");
    
        let entry = prompt("Darajani tanlang: ");
        switch(entry){
            case '1':   return 1;
            case '2':   return 2;
            case '3':   return 3;
            case '0':   return 0;
            default: console.log("\nXato tanlov!, faqat berilgan variantlardan birini tanlang!");
        };
    };
};