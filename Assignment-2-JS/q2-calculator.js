function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            result = num1 / num2;
            break;
        default:
            return "Invalid Operator";
    }

    return result;
}

console.log(calculate(10, 5, '+')); 
console.log(calculate(10, 5, '-')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '/')); 
console.log(calculate(10, 0, '/'));
console.log(calculate(10, 5, '%')); 
