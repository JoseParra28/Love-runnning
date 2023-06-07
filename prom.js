
// function myFunc(){
//     document.getElementById("text").innerHTML = "Hello puta"
//     document.getElementById("text").style.fontSize = "100px"
//     document.getElementById("text").style.color = "#bd6b22"
// };

// document.getElementById("btn").addEventListener("click", function(){
//     document.getElementById("p").innerHTML = "rakhbur";
// });

// let question = (prompt("What is 2 + 2"))

// if (question < 4 ){
//     document.getElementById("p").innerHTML = "no that is not correct";
// }else if (question > 4 ){
//     document.getElementById("p").innerHTML = "no that is ALSO not correct";
// }else{
//     document.getElementById("p").innerHTML = "well done";
// }




// document.getElementById("sbtn").addEventListener("click", function(){
//     let username = document.getElementById("user").value;
//     document.getElementById("output").innerHTML = username;
//     document.getElementById("greet").innerHTML = "oh hello" + username;
// })

// let fruits = ["apples", "bananas", "kiwis", "strawberries"]

// for (i = 0; i < fruits.length; i++){
//   document.write(fruits[i])
// }

// let attemptedUploads = 0;

// do {
//     console.log("Attempting upload...");
//     attemptedUploads++;
// } while (attemptedUploads < 5);

// console.log("Upload attempts exceeded maximum");

// document.getElementById("sbtn").addEventListener("click", function(){
//     let username = document.getElementById("user").value;
//     document.getElementById("output").innerHTML = username;
    
// })


// document.getElementById("sbtn").addEventListener("click", function(){
//     const quiz = (prompt("How many days in a year"))
//     if (quiz < 365){
//         document.getElementById("output").innerHTML = "No, the year has more days than that"
//     } else if (quiz > 365){
//         document.getElementById("output").innerHTML = "No, the year has LESS days than that"
//     }else {
//         document.getElementById("output").innerHTML = "Well done"
//     }
// })

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector(".cloose-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for(let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function(){
    console.log("button clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  const closeModal = function(){
  modal.classList.add('hidden');
  modal.classList.add('hidden');
};



document.addEventListener('keydown', function(e){
  if (e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal();
    }
  }
);


let fruit = ["apples", "bananas", "pears"];
let parra = document.querySelector(".parra");



document.getElementById("submit").addEventListener("click", function(){
  let input = document.getElementById("fruitInp").value;
  
  if (input == fruit[0]){
    document.getElementById("fruitList").textContent = input + " are super delicious";
    parra.classList.remove("hidden")
  }else if (input == fruit[1]){
    document.getElementById("fruitList").textContent = input + " are super good for you";
    
  }else if (input == fruit[2]) {
    document.getElementById("fruitList").textContent = "I actually don't like " + input;
    
  }else if (input == 0) {
    document.getElementById("fruitList").textContent = "You havent selected anything";
  }else {
    document.getElementById("fruitList").textContent = "I don't know that fruit";
  }
});
    
  





