/*
    Функція суми:
    Створити функцію sum, яка приймає два числа 
    і повертає їх суму.
*/
function findMax(numbers) {
    let maxNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
          maxNumber = numbers[i];
        }
    }

    return maxNumber;
}

const testArray = [1, 5, 3, 9, 2];
console.log(findMax(testArray));