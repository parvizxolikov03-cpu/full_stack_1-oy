export function intermediateLevel() {
    const questions = [];
    for (let i = 1; i < 11; i++) {
        let a = Math.floor(Math.random() * 500 + 1);
        let b = Math.floor(Math.random() * 500 + 1);
        let result = 0;
        let action = Math.floor(Math.random() * 4);

        switch (action) {
            case 0:
                result = a + b;
                action = "+";
                break;
            case 1:
                result = a - b;
                action = "-";
                break;
            case 2:
                result = a * b;
                action = "*";
                break;
            case 3:
                result = Math.floor(a / b);
                action = "/";
                break;
        }

        questions.push(new Map([
            ["question", `${a} ${action} ${b} = `],
            ["answer", result],
            ["time", undefined],
            ["ball", undefined],
            ["qNum", i]
        ]))
    }
    return questions
};