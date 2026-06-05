/*
    Функція з колбеком:
    Створити функцію calculate, яка приймає два числа і колбек.
    Колбек визначає дію: додавання або віднімання.
*/

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}
function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));