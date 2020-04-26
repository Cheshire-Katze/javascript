
function number_in_object(a) {

if (a>=0 && a<=999) {
    let number = {
        hundreds: 0,
        decades: 0,
        units: 0
    }
    number.hundreds = Math.floor(a/100);
    a = a-(number.hundreds*100);
    number.decades = Math.floor(a/10);
    number.units = a-(number.decades*10);

    return console.log(number);
    //return console.log('сотни: ' + number.hundreds + ' десятки: ' + number.decades + ' единицы: ' + number.units);

} else if (a>999) {
    return console.log('Введено некорректное число!');
} else {
    return console.log('Введены некорректные значения!');
}
}

number_in_object(245);
/*
Вопросы:
1) Как правильно выводить объект? 'return console.log(number);' или каждое свойство отдельно?
2) Что значит "вывести пустой объект"? Можно пример. В google информацию не нашел.
*/
