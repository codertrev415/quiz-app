const quiz = [
    {question: "What color is an orange?", answers: ["a. orange", "b. zebra", "c. purple", "d. blue"], correct: "a. orange"},
    {question: "What is the 50th state?", answers: ["a. Alaska", "b. France", "c. California", "d. Hawai'i"], correct: "d. Hawai'i"},
    {question: "What is 100-77?", answers: ["a. 3", "b. 33", "c. -33", "d. 177"], correct: "b. 33"}
] 

function addElement(){

    

    for(let i = 0; i < quiz.length; i++){
        let currentQuestion = quiz[i]
        let createSection = document.createElement("section")
        let createDiv = document.createElement("div")
        createSection.appendChild(createDiv)
        createDiv.textContent = (currentQuestion.question)
        document.body.appendChild(createSection)
        
        for(let i = 0; i < currentQuestion.answers.length; i++){
            

            let button = document.createElement("button")
            createDiv = document.createElement("div")
            document.body.appendChild(createDiv)
            document.body.appendChild(button)
            createDiv.textContent = (currentQuestion.answers[i])
            button.appendChild(createDiv)
            button.addEventListener("click", () => {
                const button = document.querySelector("answers")
                button.classList.toggle("hidden")
                
    //button.appendChild(button)
            })
    
        
    }
} 
    }
   


addElement()


const button = document.querySelector("button")
button.classList.add("bold")
button.addEventListener("click", () =>{
    button.classList.toggle("hidden")
})
/*console.log(button)

console.log(`Question ${i + 1}: ${currentQuestion.question}`)
    console.log(`Options: ${currentQuestion.answers.join(", ")}`)
    console.log(`The correct answer is: ${currentQuestion.correct}`)*/