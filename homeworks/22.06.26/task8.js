// 8. Valid Parentheses
// Qavslar to'g'ri yopilganligini tekshiring. Misol: isValid('()[]{}') => true
function isValid(scope){
    while(
        scope.includes('[]') ||
        scope.includes('()') ||
        scope.includes('{}')
    ){
        scope = scope.replace('[]', '');
        scope = scope.replace('()', '');
        scope = scope.replace('{}', '');
    }
    return scope.length === 0;
}

console.log(isValid('((){}[[]](()))'));
