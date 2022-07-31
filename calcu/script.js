// let count = 0;
// let cant = document.getElementById("cnt");
// function counting() {
//   count += 1;
//   cant.textContent = count;
// }
// let sev = document.getElementById("vw");
// function saving() {
//   let nem = count + "- ";
//   sev.textContent += nem;
//   count = 0;
//   cant.textContent = count;
// document.getElementById("err").textContent =
//   "something went wrong please try again later";
// }
// let firstName = "sodiq";
// let greeting = "hi there";
// function call() {
//   let cali = greeting + ", " + firstName + "!";
//   console.log(cali);
// }
// call();
// let myPoints = 3;
// function addPoints() {
//   myPoints += 3;
//   console.log(myPoints);
// }
// function remPoints() {
//   myPoints -= 1;
//   console.log(myPoints);
// }
// addPoints();
// addPoints();
// addPoints();
// remPoints();
// remPoints();
let num1 = 8;
let num2 = 2;
document.getElementById("nem1-el").textContent = num1;
document.getElementById("nem2-el").textContent = num2;

function add() {
  let addy = num1 + num2;
  document.getElementById("sum-el").textContent = "SUM: " + addy;
}
function subtract() {
  let suby = num1 - num2;
  document.getElementById("sum-el").textContent = "SUM: " + suby;
}
function divide() {
  let div = num1 / num2;
  document.getElementById("sum-el").textContent = "SUM: " + div;
}
function multiply() {
  let mul = num1 * num2;
  document.getElementById("sum-el").textContent = `SUM: ${mul}`;
}
