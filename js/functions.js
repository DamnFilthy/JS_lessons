"use strict";
let myName = "Alexander";


function showFirstMessage(name) {
    let data = {
        1: 'Masha',
        2: 'Dasha',
        3: 'Pasha'
    };

    let newData = [0, 1, 2, 3, 4, 5];
    console.log(myName);
    console.log(`Hello ${data[3]}! and new data = ${newData[2]}`);
}

showFirstMessage();

// Function declaration
// Создается до начала выполнения скрипта
// Можно вызвать перед объявлением
console.log(calc(1, 1));

function calc(a, b) {
    return (a + b);
}



// Function Expression
// Создается только тогда, когда доходит поток кода
// Можно вызвать только после объявления
const logger = function () {
    console.log("hello i am logger");
};
logger();

// Стрелочная функция
// Не имеет своего контекста(this)
const newCalc = (a, b) => console.log(a + b);
newCalc(3, 11);


let a = 3;

function addTwo(x) {
    let ret = x + 2;
    return ret;
}
let b = addTwo(a);
console.log(b);


let val1 = 2;

function multiplyThis(n) {
    let ret = n * val1;
    return ret;
}
let multiplied = multiplyThis(6);
console.log('example of scope:', multiplied);


let val = 7;

function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b;
        return ret;
    }
    return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);