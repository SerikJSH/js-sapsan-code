"use strict";
// Не явная типизация
let a = 10;

// Явная типизация
let value: number = 10;
let value1: string = "hello";
let value2: boolean = true;
let value3: null = null;
let value4: undefined = undefined;

// union - Объединенная типизация
let value5: string | number = 25;
value5 = 20;
value = 2000;

// enum - Перечисление
let value6: 'pending' | 'fulfilled' | 'rejected';
value6 = 'rejected';


console.log(typeof (value));
value = 2000;

console.log("Ranfom text");

// Функции
function sum(a: number, b: number, c?: boolean): string { // c? - опциональный агрумент
    return String(a + b);
    // return a + b;
}
// sum();
sum(20, 21);

// конфигурация tsconfig.json
// https://gist.github.com/KRostyslav/82a25c469ffa6652825d58537ac6bc22

// Массивы
let value7: number[] = [1, 2, 3, 4, 5];
let value8: Array<boolean> = [true, false];
const arr: { id: number, name: string }[] = [{ id: 1, name: 'John' }]
const obj: { id: number, name: string } = { id: 2, name: 'Peter' }

// объявление типа переменных в отдельный блок
type UserData = { id: number, name: string, age?: number };
const arr2: UserData[] = [{ id: 1, name: 'John' }];
const obj2: UserData = { id: 2, name: 'Peter' };
