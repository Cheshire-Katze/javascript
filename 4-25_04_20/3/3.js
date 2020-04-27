// объявление переменных/объектов
let questions = {
    1: '1-й вопрос',
    2: '2-й вопрос',
    3: '3-й вопрос'
}
let answers = {
    11: 'ответ 11',
    12: 'ответ 12',
    13: 'ответ 13',
    14: 'ответ 14',

    21: 'ответ 21',
    22: 'ответ 22',
    23: 'ответ 23',
    24: 'ответ 24',

    31: 'ответ 31',
    32: 'ответ 32',
    33: 'ответ 33',
    34: 'ответ 34'
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
let f_on_f;
let f_on_f_flag=true;
let f_on_f_text = 'Подсказки: ' + '50 - 50/50';

// задаем вопросы пользователю
do {
    answer_user = prompt('Вопрос на ' + cost_que + ' р.!' + '\n' + questions[i] + '\n' + ' ' + '\n' + answers[num_ans+1] + '\n' + answers[num_ans+2] + '\n' + answers[num_ans+3] + '\n' + answers[num_ans+4] + '\n' + '' + '\n' + '0 - Закончить игру. ' + f_on_f_text);
    // если взял помощь зала
    
    // если user взял подсказку 50/50.
    if (answer_user==50 && f_on_f_flag==true) {
        f_on_f_text = '';
        f_on_f_flag = false;
        do {
            f_on_f = Math.floor(Math.random() * (4-1+1)) + 1;
            f_on_f = num_ans + f_on_f;
        } while (num_ans+cor_ans[i] == f_on_f);
        answer_user = prompt('Вопрос на ' + cost_que + ' р.!' + '\n' + questions[i] + '\n' + ' ' + '\n' + answers[num_ans+cor_ans[i]] + '\n' + answers[f_on_f])
    }

    // если user вышел из игры
if (answer_user==0) {
    alert('Игра окончена! Ваш выигрышь: ' + prize + ' р.');
    break;
    // если ответ был неверный
} else if (answer_user != cor_ans[i]) {
    prize=0;
    alert('Ответ неверный. Вы проиграли. Ваш выигрышь: ' + prize + ' р.')
    break;
    // если ответ был верным
} else {
    prize += 100;
    alert('Ответ правильный! Вы выиграли ' + prize + ' р.!');
    // хочет ли user продолжить играть?
    if (i<Object.keys(questions).length) {
    next = prompt('Хотите продолжить или заберете выигрышь?' + '\n' + '' + '\n' + '1 - Продолжить' + '\n' + '2 - Забрать выйгрышь');
    // если не хочет продолжать
    if (next == 2) {
        alert('Поздравляю! Ваш выигрышь - ' + prize + ' р.')
        break;
        // если хочет продолжать
    } else {
        cost_que += 100;
        i++;
        num_ans +=10;
    }
    // если вопросы закончились, то конец игры
    } else {
        i++;
        alert('Игра окончена! Ваш выигрышь: ' + prize + ' р.');
    }
}

} while (i<=Object.keys(questions).length);



