let result;

function sum(a,b) {
    result = a+b;
    return result;
}

function subtract(a,b) { // 1...
    result = a-b; // Функция производит расчет.
    return result; // И возвращает результат.
}

function multiply(a,b) {
    result = a*b;
    return result;
}

function divide(a,b) {
    result = a/b;
    return result;
}

alert(sum(6,2))
alert(subtract(6,2)); // 1. Вызывается функция.
alert(multiply(6,2));
alert(divide(6,2));

