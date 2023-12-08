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

