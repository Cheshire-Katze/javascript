// объявление переменных/объектов
let questions = {
    1: '1-й вопрос',
    2: '2-й вопрос',
    3: '3-й вопрос'
}
let answers = {
    1.1:'ответ 1',
    1.2:'ответ 2',
    1.3:'ответ 3',
    1.4:'ответ 4',

    2.1:'ответ 1',
    2.2:'ответ 2',
    2.3:'ответ 3',
    2.4:'ответ 4',

    3.1:'ответ 1',
    3.2:'ответ 2',
    3.3:'ответ 3',
    3.4:'ответ 4'
}
let i=1;
let answer_user;
let next;
let prize=0;

// задаем вопрос пользователю
do {
    answer_user = prompt('Вопрос на 100 р.!' + '\n' + questions[i] + '\n' + ' ' + '\n' + answers[1.1] + '\n' + answers[1.2] + '\n' + answers[1.3] + '\n' + answers[1.4] + '\n' + '' + '\n' + '-1 - выход');

if (answer_user==-1) {
    alert('Вы даже не попробовали(');
    break;
} else if (answer_user != 2) {
    alert('Ответ неверный. Вы проиграли. Ваш выигрышь: ' + prize)
    break;
} else {
    prize = 100;
    alert('Ответ правильный! Вы выиграли 100 р.!');
    next = prompt('Хотите продолжить или заберете выигрышь?' + '\n' + '' + '\n' + '1 - Продолжить' + '\n' + '2 - Забрать выйгрышь');
    if (next == 2) {
        alert('Поздравляю! Ваш выигрышь - ' + prize)
        break;
    } else i++;
}
} while (i<=Object.keys(questions).length)



/*answer_user = prompt('Вопрос на 200 р.!' + '\n' + questions[i] + '\n' + ' ' + '\n' + answers[2.1] + '\n' + answers[2.2] + '\n' + answers[2.3] + '\n' + answers[2.4] + '\n' + '' + '\n' + '-1 - выход');

if (answer_user==-1) {
    alert('Поздравляю! Ваш выигрышь - ' + prize);
    break;
} else if (answer_user != 4) {
    prize=0;
    alert('Ответ неверный. Вы проиграли. Ваш выигрышь: ' + prize)
    break;
} else {
    prize *= 2;
    alert('Ответ правильный! Вы выиграли 200 р.!');
    next = prompt('Хотите продолжить или заберете выигрышь?' + '\n' + '' + '\n' + '1 - Продолжить' + '\n' + '2 - Забрать выйгрышь');
    if (next==2) {
        alert('Поздравляю! Ваш выигрышь - ' + prize)
        break;
    } else i++;
}*/










function ask() {

}