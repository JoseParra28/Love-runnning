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


