let result;

function sum(a,b) {
    return a+b;
}

function subtract(a,b) { // 1...
    return a-b; // Функция производит расчет. // И возвращает результат.
}

function multiply(a,b) {
    return a*b;

}

function divide(a,b) {
    if (a==0 || b==0) {
        alert("На ноль делить нельзя!");
        return 0;
    }
    else return a/b;
}

alert(sum(6,2))
alert(subtract(6,2)); // 1. Вызывается функция.
alert(multiply(6,2));
alert(divide(0,2));

