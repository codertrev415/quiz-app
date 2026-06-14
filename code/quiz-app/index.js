const quiz = [
    {question: "What color is an orange?", answers: ["a. orange", "b. zebra", "c. purple", "d. blue"], correct: "a. orange"},
    {question: "What is the 50th state?", answers: ["a. Alaska", "b. France", "c. California", "d. Hawai'i"], correct: "d. Hawai'i"},
    {question: "What is 100-77?", answers: ["a. 3", "b. 33", "c. -33", "d. 177"], correct: "b. 33"}
] 

function addElement(){

    let createDiv = document.createElement("div")
    document.body.appendChild(createDiv)
    createDiv.textContent = (quiz[0].question)
      
    let button = document.createElement("button")
    createDiv = document.createElement("div")
    button = document.createElement("button")
    document.body.appendChild(createDiv)
    document.body.appendChild(button)
    createDiv.textContent = (quiz[0].answers)
    button.appendChild(createDiv)
    button.addEventListener("click", () => {
        alert("")
    //button.appendChild(button)
    })

    createDiv = document.createElement("div")
    button = document.createElement("button")
    document.body.appendChild(createDiv)
    document.body.appendChild(button)
    createDiv.textContent = (quiz[0].correct)
    button.appendChild(createDiv)
    button.addEventListener("click", () => {
        alert("")
    button.appendChild(button)
    })

    
    for(let i = 0; i < quiz.length; i++){
    let currentQuestion = quiz[i]
    console.log(`Question ${i + 1}: ${currentQuestion.question}`)
    console.log(`Options: ${currentQuestion.answers.join(", ")}`)
    console.log(`The correct answer is: ${currentQuestion.correct}`)

    for(let i = 0; i < AudioScheduledSourceNode)


} 
   
}

addElement()

