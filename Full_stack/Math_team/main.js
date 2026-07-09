import { startGame as menu, prompt } from "./menu/menu.js";
import { questionMaker as easy } from "./level-1/question_maker.js";
import { intermediateLevel as middle } from "./level-2/middle.js";
import { hardLevel as hard } from "./level-3/hard.js";
import { gaming as score } from "./score/score.js"
import { getResult } from "./score/result.js"


const choise = menu();
console.clear();
let questions = [];

switch (choise) {
    case 1:
        questions = easy();
        break;
    case 2:
        questions = middle();
        break;
    case 3:
        questions = hard();
        break;
    case 0:
        console.log("\nDasturdan chiqilmoqda!");
        break;
};
const result = score(questions);
console.log(getResult(result));