
function number_in_object(a) {
    let number = {
        hundreds: 0,
        decades: 0,
        units: 0
    }
if (a>=0 && a<=999) {

    number.hundreds = Math.floor(a/100);
    a = a-(number.hundreds*100);
    number.decades = Math.floor(a/10);
    number.units = a-(number.decades*10);

    // для себя попробовал, чтобы увидеть как работает перебор свойств объекта.
    /*  for (let pop in number) {
        console.log(pop  + ': ' + number[pop]);
    }*/

    return console.log(number);
    //return console.log('сотни: ' + number.hundreds + ' десятки: ' + number.decades + ' единицы: ' + number.units);

} else if (a>999) {
    delete number.hundreds;
    delete number.decades;
    delete number.units;
    console.log('Введено некорректное число!');
    return console.log(number);
} else {
    delete number.hundreds;
    delete number.decades;
    delete number.units;
    console.log('Введены некорректные значения!');
    return console.log(number);
}
}

number_in_object(prompt('Введите число от 0 до 999'));


/*
Вопросы:

1) Как правильно выводить объект? 'return console.log(number);' или каждое свойство отдельно?
Сделал два вывода, на всякий случай.

2) Что значит "вывести пустой объект"? Удалить все его свойства или вывести объект с нулевыми свойствами, без их удаления?
Можно пример. В google информацию не нашел. Постарался сделать максимально похожий вывод.
Но скорей всего не правильно, но ничего другого в голову не приходит.
*/
