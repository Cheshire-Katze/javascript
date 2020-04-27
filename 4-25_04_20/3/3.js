// объявление переменных/объектов
let questions = {
    1: '1-й вопрос',
    2: '2-й вопрос',
    3: '3-й вопрос'
}
let answers = {
    11:'ответ 11',
    12:'ответ 12',
    13:'ответ 13',
    14:'ответ 14',

    21:'ответ 21',
    22:'ответ 22',
    23:'ответ 23',
    24:'ответ 24',

    31:'ответ 31',
    32:'ответ 32',
    33:'ответ 33',
    34:'ответ 34'
}
let cor_ans = {
    1: 2,
    2: 4,
    3: 1
}
let i=1;
let answer_user;
let next;
let prize=0;
let cost_que=100;
let num_ans = 10;
// задаем вопросы пользователю
do {
    answer_user = prompt('Вопрос на ' + cost_que + ' р.!' + '\n' + questions[i] + '\n' + ' ' + '\n' + answers[num_ans+1] + '\n' + answers[num_ans+2] + '\n' + answers[num_ans+3] + '\n' + answers[num_ans+4] + '\n' + '' + '\n' + '-1 - Забрать выигрышь. ' + 'Подсказки: ' + '50/50');

if (answer_user==-1) {
    alert('Игра окончена! Ваш выигрышь: ' + prize + ' р.');
    break;
} else if (answer_user != cor_ans[i]) {
    prize=0;
    alert('Ответ неверный. Вы проиграли. Ваш выигрышь: ' + prize + ' р.')
    break;
} else {
    prize += 100;
    alert('Ответ правильный! Вы выиграли ' + prize + ' р.!');
    if (i<Object.keys(questions).length) {
    next = prompt('Хотите продолжить или заберете выигрышь?' + '\n' + '' + '\n' + '1 - Продолжить' + '\n' + '2 - Забрать выйгрышь');
    if (next == 2) {
        alert('Поздравляю! Ваш выигрышь - ' + prize + ' р.')
        break;
    } else {
        cost_que += 100;
        i++;
        num_ans +=10;
    }
    } else {
        i++;
        alert('Игра окончена! Ваш выигрышь: ' + prize + ' р.');
    }
}
} while (i<=Object.keys(questions).length);



