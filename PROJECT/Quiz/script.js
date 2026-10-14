const questions =[
    {
        question:"Who is the GOAT in Football?",
        answers:[
            {text:"Mbappe",correct:false},
            {text:"Messi",correct:false},
            {text:"C.Ronaldo",correct:true},
            {text:"Mbappe",correct:false},
        ]
    },
        {
        question:"who are you?",
        answers:[
            {text:"Man",correct:false},
            {text:"Boy",correct:false},
            {text:"Girl",correct:false},
            {text:"Cat",correct:true},
        ]
    },
        {
        question:"which is the Largest Country?",
        answers:[
            {text:"India",correct:false},
            {text:"China",correct:true},
            {text:"America",correct:false},
            {text:"Brasil",correct:false},
        ]
    },
        {
        question:"Where are you From?",
        answers:[
            {text:"Kottayam",correct:false},
            {text:"Cochi",correct:false},
            {text:"Idukki",correct:false},
            {text:"Oolampara",correct:true},
        ]
    },
]
const questionElement =document.getElementById("question")
const answerButton =document.getElementById("question-buttons")
const nextButton =document.getElementById("next")

let currentQuestionIndex =0;
let score=0;

function startQuiz(){
 currentQuestionIndex=0;
 score=0;
 nextButton.innerHTML='Next'
 showQuestion()
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo+"."+currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button)

        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}
 function resetState(){
    nextButton.style.display ='none'
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
 }
 function selectAnswer(e){
    const selectedButton = e.target
    const isCorrect = selectedButton.dataset.correct === "true";
     if(isCorrect){
        selectedButton.classList.add("correct")
        score++
     }else{
        selectedButton.classList.add("inCorrect")
     }
     Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled =true;
     })
     nextButton.style.display = "block"
 }
 function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again"
    nextButton.style.display ="block"
 }
 function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
 })
startQuiz();