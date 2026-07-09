export function hardLevel(){
const questions = [];

    for (let i = 1; i < 11; i++){
        let a = Math.floor(Math.random() * 1000 + 1);
        let b = Math.floor(Math.random() * 1000 + 1);
        let c = Math.floor(Math.random() * 1000 + 1);
        let result = 0;
        let action = Math.floor(Math.random() * 4)
        switch (action){
            case 0: 
                result = a + b;
                action = '+';
                break;
            case 1: 
                result = a - b;
                action = '-';
                break;
            case 2: 
                result = Math.floor(a / b);
                action = '/';
                break;
            case 3: 
                result = a * b;
                action = '*';
                break;
        }

        let action1 = Math.floor(Math.random() * 4)
        switch (action1){
            case 0: 
                result += c;
                action1 = '+';
                break;
            case 1: 
                result -= c;
                action1 = '-';
                break;
            case 2: 
                result = Math.floor(result / c);
                action1 = '/';
                break;
            case 3: 
                result *= c;
                action1 = '*';
                break;
        }


        questions.push(new Map([
            ['question', `${a} ${action} ${b} ${action1} ${c} =`],
            ['answer', result],
            ['time', undefined],
            ['ball', undefined],
            ['qNum', i]
        ]))
    }
    return questions
}
