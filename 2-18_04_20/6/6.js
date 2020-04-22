let result;
let a = parseInt(prompt('Чему равно а?'));
let b = parseInt(prompt('Чему равно b?'));
let operation = prompt('Введите арифметическую операцию');

function sum(a,b) {
    result = a+b;
    return result;
}
function subtract(a,b) { // 4. операция производит расчет и возвращает резульат
    result = a-b;
    return result;
}

function multiply(a,b) {
    result = a*b;
    return result;
}

function divide(a,b) {
    result = a/b;
    return result;
}

function mathOperation(a,b,operation) {
    switch (operation) { // 2. switch ищет совпадения... какую операцию выполнить
        case 'сложение':
            result = sum(a,b);
            break;
        case 'вычитание':
            result = subtract(a,b); // 3. Если совпадение найдено, вызывается нужная для вычислений операция
            break;
        case 'умножение':
            result = multiply(a,b);
            break;
        case 'деление':
            result = divide(a,b);
            break;
        default:
            result='Введены некорректные значения';
    }
    return result; // 5. После получения результата вычесления от вспомогательной функции (sum, subtract и т.д), функция mathOperation возвращает конечный результат.
}

alert(mathOperation(a,b,operation)); // 1. Вызываем функцию