let a = parseFloat(prompt("Введите число от 0 до 15"));

switch (a) {
    case 0:
        document.write(0);
    case 1:
        document.write(1);
    case 2:
        document.write(2);
    case 3:
        document.write(3);
    case 4:
        document.write(4);
    case 5:
        document.write(5);
    case 6:
        document.write(6);
    case 7:
        document.write(7);
    case 8:
        document.write(8);
    case 9:
        document.write(9);
    case 10:
        document.write(10);
    case 11:
        document.write(11);
    case 12:
        document.write(12);
    case 13:
        document.write(13);
    case 14:
        document.write(14);
    case 15:
        document.write(15);
    default:
        alert('Неверное значение')
}

// Я надеюсь, что я правильно понял задание т.к. это можно сдеалать с помощью рекурсии либо цикла.
// Также как и 3-ем задании процесс простой. Последовательно проверяется совпадение введенного значения с указым значением в case.
// При нахождении такого совпадения выводится alert и процесс останавливает break.