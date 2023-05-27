document.write("<h1>Hello there</h1>");
document.write("<hr>");
document.write("<p>This is my first great test</p>")

// let names = "Jose";
// let job = "Programmer";

// const greeting = "Hello";
// const num = 100;


// document.write(10 ** 2,  "<br>");
// document.write(greeting + " ", names + " ", job  + " ", Number(num / 2 ),   "<br>");

// let user = window.prompt("Enter you name ");
// alert("Your name is " + user)

let header = document.getElementById("myHeader");

header.style="color: black; background-color: grey"
document.write(header.getAttribute("giraffe"));
header.innerHTML = "Elephant academy";

//  errays

const luckyNums = [4, 8, 15, 16, "twenty", false];

luckyNums[0] = 90;
document.write(luckyNums.length + "<br>")

// objects\

// let student = {
//     usernmame: "Jose",
//     age: 29,
//     sector: "Programming"
// }
// student.usernmame = "Miguel"
// document.write(student.usernmame + "<br>")
// document.write(student.age + "<br>")
// document.write(student.sector + "<br>")


// let sum = addNumber(155, 4890);
// document.write(sum)

// function addNumber(num1, num2){
//     return num1 + num2 * 2
// }

// let headers = document.getElementById("#myHeader");

// headers.addEventListener("Click", function(){
//     alert ("You clicked" + header.id)
// })

// Assigment operators
const now = 2023
const ageA = now - 1993;
const ageB = now - 1925;

document.write(ageA / 2, ageB / 2, 2 ** 3 + "<br>")

// Number operators

let x = 10 + 5;
x += 5;
x *= 4;


document.write(x + "<br>")

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)){
//     console.log("Your number in on the squere foot of " + " " + theNumber * theNumber); 
// } else {
//     console.log("Why the fuck did you not write a number you stupic slut!"); 
// }

// let test = (prompt("Pick a number"));
// if (test < 10) {
//     console.log("Small")
// }else if (num < 100){
//     console.log("Medium")
// } else {
//     console.log("big")
// }

// ----------------------------- If statement

// let statement = (prompt("Guess my age"))
// if (statement > 29){
//     console.log("What the actual fuck!! I'm not that old!!")
// } else if (statement == 29 ){
//     console.log("Ye! That's correct")
// }
// else {
//     console.log("Unfortunately I'm a little older than that")
// } 

// ----------------------------- While llop
// let number = 0;
// while (number <= 12){
//     console.log(number);
//     number = number + 1;
// }

// ----------------------------- While loop 2
// let result = 1;
// let counter = 0;
// while (counter < 10){
// result = result * 2;
// counter = counter + 1;
// }
// console.log(result)

// ----------------------------- Do loop
// let yourName; 
// do {
//     yourName = (prompt("whats your name"));
// } while (!yourName);
// console.log(yourName )

// ----------------------------- for loop
// for(let number2 = 0; number2 <= 12; number2 = number2 + 1){
//     console.log(number2)
// }

// ----------------------------- for loop with break

// for(let current = 20; ; current = current = 1) {
//     if (current % 7 == 0 ){
//         console.log(current);
//         break;
//     }
// }

// let fruits = (prompt("Enter how many apples you have"));
// let outcome;

// if (fruits > 5 ){
//     console.log("I can make apple juice")
// }else if (fruits < 5) {
//     console.log("I can't make apple juice")
// }else if(fruits <= 5){
//     console.log("I can make just enough apple juice")
// }else {
//     console.log("Apple juice is good")
// }

// --------------------------------------------- more if statement 

// let days = (prompt("How many days are in one year"))

// if (days < 365 ){
//     document.write("There are more days in a year" + "<br>")
// }else if (days == 366 ){
//     document.write("Thats actually correct but every four years" + "<br>")
// }else if (days > 366 ){
//     document.write("There are less days in a year" + "<br>")
// }else {
//     document.write("Thats correct well done!" + "<br>")
// }

// --------------------------------------------- nested if / else

// let id = (prompt("Plase verify you email"));
// let verified = false;

// if (id) {
//     if (verified){
//         document.write("Welcome" + "<br>")
//     } else {
//         document.write("You need to  verify your id" + "<br>")
//     }
// } else {
//     document.write("you need to be a user to very your id" + "<br>")
// }

// --------------------------------------------- Errays
// let clothes = ["top", "jeans", "shoes", "hat", "tie", "boxers"] 

// let clotehsVar = clothes[0]
// document.write(clotehsVar + "<br>")

