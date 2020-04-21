let result;
let a = parseInt(prompt('Чему равно а?'));
let b = parseInt(prompt('Чему равно b?'));
let operation = prompt('Введите арифметическую операцию');

function sum(a,b) {
    result = a+b;
    return result;
}
function subtract(a,b) {
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
    switch (operation) {
        case 'сложение':
            result = sum(a,b);
            break;
        case 'вычитание':
            result = subtract(a,b);
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
    return result;
}

alert(mathOperation(a,b,operation));