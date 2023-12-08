// Задание 1

// ((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true)

/**
 * (5 >= 7) = false
 * ("javascript" != "java") = true
 * (false || true) = true
 * ((11 * 3) == 99) = false
 * !(false && true) = true
 * (false || true) ?? !(false && true) = true
 */

// Задание 2

// let age = 0;
// age = prompt("Сколько вам лет:", 100);
// if (age > 17 && age < 60) {
//     alert("Вам еще работать и работать.");
// } else if (age > 0 && age <= 17){
//     alert("Вам еще рано работать.");
// } else if (age >= 60 && age <= 100) {
//     alert("Вам пора на пенсию.");
// } else {
//     alert("Некорректно введенные данные.");
// }

// Задание 3

// let n = Math.round(Math.random() * 1000);
// let output = "на ветке сидело " + n;
// let marker = n % 100;
// if (marker > 10 && marker < 15) {
//     output += " ворон";
// } else if (marker != 11 && marker % 10 == 1){
//     output += " ворона";
// } else if (marker % 10 >= 2 && marker % 10 < 5){
//     output += " вороны";
// } else {
//     output += " ворон";
// }
// document.getElementById('output').innerText = output;
// console.log(output);

// Задание 4

// let num1 = Math.round(Math.random() * 200 - 100),
//     num2 = Math.round(Math.random() * 200 - 100),
//     num3 = Math.round(Math.random() * 200 - 100);
// let min = 0;
// document.getElementById('output').innerText = num1 + " " + num2 + " " + num3
// if (num1 < num2) {
//     min = num1;
// }
// else
//     min = num2;
// if (num3 < min){
//     min = num3;
// }
// console.log("Наименьшее число: " + min);
// document.getElementById('output').innerText += "\n Наименьшее число: " + min;
// let max = 0;
// if (num1 > num2) {
//     max = num1;
// } else {
//     max = num2;
// }
// if (num3 > max){
//     max = num3;
// }
// console.log("Наибольшее число: " + max);
// document.getElementById('output').innerText += "\n Наибольшее число: " + max;

//Задание 5

let apples = Math.round(Math.random()*10),
    oranges = Math.round(Math.random()*10),
    aps = apples * 0.1,
    ors = oranges * 0.15;
console.log("Апельсинов: " + oranges);
console.log("Яблок: " + apples);
document.getElementById('output').innerText = "Апельсинов: " + oranges + "\n Яблок: " + apples + "\n";
if (aps > ors) {
    console.log("Бери яблоки");
    document.getElementById('output').innerText += "Бери яблоки";
} else {
    console.log("Бери апельсины");
    document.getElementById('output').innerText += "Бери апельсины";
}
