import { timeEnd, timeStart } from "../time/time.js"
import { prompt } from "../menu/menu.js";

export function gaming(questions) {
    for (let question of questions) {
        
        let start = timeStart();
        let answer = +prompt(question.get('question'));
        
        let diff = timeEnd(start);
        
        question.set('time', diff)

        if (answer === question.get('answer')) {
            console.log("To'gri javob berdingiz!\n");
            if (diff <= 5) question.set('ball', 3);
            else if (diff <= 8) question.set('ball', 2);
            else question.set('ball', 1);
        } else {
            console.log("Xotoo!\n");
            question.set('ball', 0);
        };
    };
    console.log("Tugadi");
    
    return questions
};