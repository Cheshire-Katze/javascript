let i;
let s;
let q = '';

for (i=1; i<=20; i++) { // цикл для формирования ряда
    for (s=0; s<i; s++) { // цикл для формирования строки в ряду
        q += ('x');
    }
    console.log(q); // когда строка в ряду сформирована записываем ее в лог
    q = ''; // обнуляем строку для след. ряда
}