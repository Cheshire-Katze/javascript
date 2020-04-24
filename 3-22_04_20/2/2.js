function even_odd(a) {
    return a%2;
}

let i = 0;
let mas = [];

    do {
        if (i === 0) {
            mas.push(i + " - это ноль");
            i++;
        } else {
            if (even_odd(i) === 0) {
                mas.push(i + " - четное число")
                i++;
            } else {
                mas.push(i + " - нечетное число");
                i++;
            }
        }
    } while (i <= 10);


for (i=0; i<mas.length; i++) {
    document.writeln(mas[i] + '<br>');
}
