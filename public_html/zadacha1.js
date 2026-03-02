/*1. Променливи и основни операции
Задача: Създай програма, която изчислява лицето на правоъгълник.

    Дефинирай две променливи: width (ширина) и height (височина).

    Присвои им числови стойности.

    Създай трета променлива area, която да съхранява резултата от умножението на двете.

    Изпиши резултата в конзолата (console.log) в кратко изречение, например: "Лицето на правоъгълника е: 50". */


let height = prompt("Enter a height: ");
let n_height = parseInt(height);

let width = prompt("Enter a width: ");
let n_width = parseInt(width);

let area = n_height * n_width;

console.log(area);

