const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)




function startGame(){
    console.log("The game has started")
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.getElementById("button")
        button.innerText = answers.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", seletAnswer)
        answerButtonElement.appendChild(button)
    })
}
function seletAnswer(e){

}


/* Questions */
const questions = [

    {
      question: 'What kind of icing is typically used to assemble gingerbread houses?',
      answers: [{
          text: 'Italian Buttercream',
          correct: false
        },
        {
          text: 'Royal Icing',
          correct: true
        },
      ]
    },
    {
      question: 'What type of pastry is better?',
      answers: [{
          text: 'French',
          correct: true
        },
        {
          text: 'Irish',
          correct: true
        },
      ]
    },
    {
      question: 'What is Tiramisu?',
      answers: [{
          text: 'A drink',
          correct: false
        },
        {
          text: 'A dessert',
          correct: true
        },
      ]
    },
    {
      question: 'What is Pectin NH?',
      answers: [{
          text: 'Raising agent',
          correct: false
        },
        {
          text: 'Setting agent',
          correct: true
        },
      ]
    },
    {
      question: 'What is an Entremet',
      answers: [{
          text: 'Type of bread',
          correct: false
        },
        {
          text: 'Multi-layer mousse cake',
          correct: true
        },
      ]
    },
    {
      question: 'What kind of cheese is traditionally used in making Tiramisu?',
      answers: [{
          text: 'Mascarpone',
          correct: true
        },
        {
          text: 'Blue cheese',
          correct: false
        },
  
      ]
    },
    {
      question: ' What two flavors make up "Gianduja?"?',
      answers: [{
          text: 'Chocolate & Hazelnut',
          correct: true
        },
        {
          text: 'Chocolate & Coconut',
          correct: false
        }
      ]
    },
    {
      question: 'What is the French term for the dough used to make eclairs?',
      answers: [
  
        {
          text: 'Mise en place',
          correct: false
        },
        {
          text: 'Pate a choux',
          correct: true
        }
      ]
    },
    {
      question: 'Julia Child was born in Paris',
      answers: [{
          text: 'True',
          correct: false
        },
        {
          text: 'False',
          correct: true
        }
      ]
    },
  ]