/*
    Фільтрація масиву чисел:
    Дано масив чисел [1, 2, 3, 4, 5, 6].
    Відфільтрувати лише парні.
    Приклад [1, 2, 3, 4, 5, 6] → [2, 4, 6].
*/

const array = [1, 2, 3, 4, 5, 6];
const evenNumbers = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
    }
}