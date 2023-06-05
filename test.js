// document.write("<h1>Hello there</h1>");
// document.write("<hr>");
// document.write("<p>This is my first great test</p>")

// let names = "Jose";
// let job = "Programmer";

// const greeting = "Hello";
// const num = 100;


// document.write(10 ** 2,  "<br>");
// document.write(greeting + " ", names + " ", job  + " ", Number(num / 2 ),   "<br>");

// let user = window.prompt("Enter you name ");
// alert("Your name is " + user)

// let header = document.getElementById("myHeader");

// header.style="color: black; background-color: grey"
// document.write(header.getAttribute("giraffe"));
// header.innerHTML = "Elephant academy";

// ----------------------------------------------- errays

// const luckyNums = [4, 8, 15, 16, "twenty", false];

// luckyNums[0] = 90;
// document.write(luckyNums.length + "<br>")

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
// const now = 2023
// const ageA = now - 1993;
// const ageB = now - 1925;

// document.write(ageA / 2, ageB / 2, 2 ** 3 + "<br>")

// ---------------------------------Number operators

// let x = 10 + 5;
// x += 5;
// x *= 4;


// document.write(x + "<br>")

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

// -------------------------------erray methods
/*
 push()
 unshift()
 pop()
 shift() 
 sort()
 reverse()
*/

// let fruit = ["apple", "<br>",
//   "banana",  "<br>",
//   "kiwi", "<br>",
//   "blueberries", "<br>",
//   "blackberries", "<br>",
//   "pears", "<br>",
//   "grapes", "<br>",
//   "strawberries", "<br>",
//   "papaya", "<br>",
//   "raspberries"
// ];

// let fruitList = fruit.pop();
// document.write(fruit + "<br>");
// document.write(fruitList + "<br>");

// fruit.sort()
// document.write(fruit + "<br>");

// let newFruit = fruit.slice(1, 3);
// document.write(newFruit + "<br>"); 

// newFruit.push("pineapple")
// document.write(newFruit + "<br>"); 

// --------------------------------------- objects
// let profession = {
//     name: "Jose Parra",
//     age: "29",
//     prpfession: "Software developer",
//     hobby: "Gym and studing",
// }
// document.write(profession + "<br>"); 
// console.log(profession)
// -----------------------------------------------
// let data = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     species: "Human"
// };

// add your code here
// let firstName = data["firstName"];
// console.log(firstName);

// let species = data.species;
// console.log(species);

// data.age = 42;

// console.log(data);
// ----------------------------------------------- addign objects

// let profile = {
//     names: "Jose Parra",
//     age: "29",
//     prpfession: "Software developer",
//     hobby: "Gym and studing",
// };

// let addSomething = profile["names"];
// console.log(addSomething)

// profile.location = "Dublin";
// console.log(profile)
 
// let countries = {
//     europe: "Ireland",
//     asia: "china",
//     north_america: "Canada",
//     south_america: "Venezuela",
// }

// let select = countries["europe"];
// console.log(select)

// countries.central_america = "Puerto rico"
// console.log(countries)
// ---------------------------------------Iterating Data Structures
// let ages = {
//     jose: "22",
//     miguel: "49",
//     antuan: "39",
//     felipe: "33",
//     maria: "22",
//     manuel: "24"
// }

// for (let data in ages){
//     document.write(`${data} is ages ${ages[data]}`);
// }

// let money = {
//     jose: "developer",
//     miguel: "lawer",
//     antuan: "teacher",
//     felipe: "sales agent",
//     maria: "student",
//     manuel: "machanic"
// }

// for ( let account in money ){
//     document.write(`${account} is a  ${money[account]} in Irelang`);
// }

let gamerScores = [
    {
    john: 89,
    paul: 725,
    george: 553,
    robert: 9302,
    languages: ["spanish", "english", "french"]
}];


console.log(gamerScores)

// ----------------------------Functions

// let day = (prompt("How old am I?"))

// function sayHi(a, b){
//     if (day == 355){
//         document.write("Well done")
//         console.log(a)
//     }else {
//         document.write("Not done well")
//         console.log(b)
//     }
// }
// sayHi("hello", "there")

// ---------------------------- when using the return, this takes the variable outside the functionFunctions

// function sum (a, b){
//     return a + b
// }
// const value = sum(1, 2)
// console.log(value)

// function expresion reminder

// ------------------------------Guess my number
// document.querySelector('.message').textContent = ' 🤟 Correct number'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 23;
// document.querySelector('.guess').value = 24;

// even listerner set
// event listener handeler function

let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 5;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector(".guess").value);
    if (!guess){
        document.querySelector(".message").textContent = "No number selected 😤";
    } else if (guess !== secretNumber){
        if (score > 1 ){
            document.querySelector(".message").textContent = guess > secretNumber ? "Thats too high 👆" : "No thats too low 👇 ";
            score--;
        document.querySelector(".score").textContent = score;
        }else {
            document.querySelector(".message").textContent = "You lost the game stupid 💀 ";
            document.querySelector("body").style.backgroundColor = "#a73535";
        }   
    } else if (guess == secretNumber){
        document.querySelector(".message").textContent = "Well done 🥳";
        document.querySelector("body").style.backgroundColor = "#315d28";
        document.querySelector(".number").textContent = secretNumber
    }
});
//  reset the game
document.querySelector(".again").addEventListener("click", function(){
    score = 5;
    secretNumber = Math.trunc(Math.random()*20) +1;

    document.querySelector('.message').textContent = "Start guessing again...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
   document.querySelector("body").style.backgroundColor = "#3a3a3a";
})






