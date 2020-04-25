
let mas = []; // пустой  массив, в котором будет формироваться список

function even_odd(a,b) { // функция
    do {
        if (a === 0) {
            mas.push(a + " - это ноль");
            a++;
        } else {
            if (a%2 === 0) {
                mas.push(a + " - четное число")
                a++;
            } else {
                mas.push(a + " - нечетное число");
                a++;
            }
        }
    } while (a <= b);
    return mas;
}

even_odd(0,10); // вызов функции

for (let i=0; i<mas.length; i++) { // вывод массива на экран
    document.write(mas[i] + '<br>');
}
