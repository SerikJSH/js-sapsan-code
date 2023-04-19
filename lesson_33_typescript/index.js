"use strict";
// Не явная типизация
var a = 10;
// Явная типизация
var value = 10;
var value1 = "hello";
var value2 = true;
var value3 = null;
var value4 = undefined;
// union - Объединенная типизация
var value5 = 25;
value5 = 20;
value = 2000;
// enum - Перечисление
var value6;
value6 = 'rejected';
console.log(typeof (value));
value = 2000;
console.log("Ranfom text");
// Функции
function sum(a, b, c) {
    return String(a + b);
    // return a + b;
}
// sum();
sum(20, 21);
// конфигурация tsconfig.json
// https://gist.github.com/KRostyslav/82a25c469ffa6652825d58537ac6bc22
// Массивы
var value7 = [1, 2, 3, 4, 5];
var value8 = [true, false];
var arr = [{ id: 1, name: 'John' }];
var obj = { id: 2, name: 'Peter' };
var arr2 = [{ id: 1, name: 'John' }];
var obj2 = { id: 2, name: 'Peter' };
