import { random_num } from './random_numbers.js';

export function operation() {
    const [a, b] = random_num();
    return a % 2 === 0
}


