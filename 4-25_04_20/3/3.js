// объявление переменных/объектов
let questions = {
    1: 'Что понадобится, чтобы взрыхлить землю на грядке?',
    2: 'В какой басне Крылова среди действующих лиц есть человек?',
    3: 'Кому в работе нужны постромки?',
    4: 'Какой писатель сформулировал Три закона робототехники?',
    5: 'Чем увлекался знаменитый сказочник Ганс-Христан Андерсен?'
}
let answers = {
    11: '1 - бабка',
    12: '2 - тяпка',
    13: '3 - скобка',
    14: '4 - тряпка',

    21: '1 - "Лягушка и Вол"',
    22: '2 - "Свинья под Дубом"',
    23: '3 - "Осел и Соловей"',
    24: '4 - "Волк на псарне"',

    31: '1 - извозчику',
    32: '2 - врачу',
    33: '3 - кузнецу',
    34: '4 - охотнику',

    41: '1 - Карел Чапек',
    42: '2 - Станислав Лем',
    43: '3 - Айзек Азимов',
    44: '4 - Курт Воннегут',

    51: '1 - вязанием',
    52: '2 - выжиганием',
    53: '3 - выпиливанием лобзиком',
    54: '4 - вырезанием из бумаги'
}
let cor_ans = {
    1: 2,
    2: 4,
    3: 1,
    4: 3,
    5: 4
}
let i=1;
let answer_user;
let next;
let prize = 0;
let cost_que = 100;
let num_ans = 10;
let f_on_f_flag = true;
let f_on_f_text = '50 - 50/50, ';
let help_people_flag = true;
let help_people_text = '100 - Помощь зала';
// задаем вопросы пользователю
do {
    answer_user = prompt('Вопрос на ' + cost_que + ' р.!' + '\n' + questions[i] + '\n' + ' ' + '\n' + answers[num_ans+1] + '\n' + answers[num_ans+2] + '\n' + answers[num_ans+3] + '\n' + answers[num_ans+4] + '\n' + '' + '\n' + '0 - Закончить игру. ' + 'Подсказки: ' + f_on_f_text + help_people_text);
    // если user взял помощь зала
    if (answer_user==100 && help_people_flag==true) {
        help_people_text = '';
        help_people_flag = false;
        let mas = [];
        let num_ran;
        for (let i=0; i<4; i++) {
            num_ran = Math.floor(Math.random() * (100-1+1)) + 1;
            mas.push(' - '+num_ran+'%');
        }
        answer_user = prompt('Вопрос на ' + cost_que + ' р.!' + '\n' + questions[i] + '\n' + ' ' + '\n' + answers[num_ans+1]  + mas[0] + '\n' + answers[num_ans+2] + mas[1] + '\n' + answers[num_ans+3] + mas[2] + '\n' + answers[num_ans+4] + mas[3] + '\n' + '' + '\n' + '0 - Закончить игру. ' + 'Подсказки: ' + f_on_f_text + help_people_text);
    }
    // если user взял подсказку 50/50.
    if (answer_user==50 && f_on_f_flag==true) {
        f_on_f_text = '';
        f_on_f_flag = false;
        let f_on_f;
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
    next = prompt('Хотите продолжить или заберете выигрышь?' + '\n' + '' + '\n' + '1 - Продолжить' + '\n' + '2 - Забрать выигрышь');
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



