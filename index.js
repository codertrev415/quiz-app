const quizContainer = document.createElement("div")
document.body.appendChild(quizContainer)

const quiz = [
    {question: "What year was AI invented", answers: ["a. 2022", "b. 1945", "c. 1956", "d. 1989"], correct: "ac. 1956"},
    {question: "What is the 50th state?", answers: ["a. Alaska", "b. France", "c. California", "d. Hawai'i"], correct: "d. Hawai'i"},
    {question: "What is 100-77?", answers: ["a. 3", "b. 33", "c. -33", "d. 177"], correct: "b. 33"}
] 

function addElement(){

    

    for(let i = 0; i < quiz.length; i++){
        let currentQuestion = quiz[i]
        //let createSection = document.createElement("section")
        let createDiv = document.createElement("div")
        //createSection.appendChild(createDiv) //questions div
        createDiv.textContent = (currentQuestion.question) // questions
        document.body.appendChild(createDiv)
        
        for(let i = 0; i < currentQuestion.answers.length; i++){
            
            let button = document.createElement("button")
            createDiv = document.createElement("div")
          
            document.body.appendChild(createDiv)
            document.body.appendChild(button)
            createDiv.textContent = (currentQuestion.answers[i])
            button.appendChild(createDiv)
            button.addEventListener("click", (event) => {
                const dialog = document.createElement("dialog")
                const closeDialog = document.createElement("button")
                document.body.appendChild(dialog)
                dialog.showModal()
                if (event.target.innerText === currentQuestion.correct) {
                    
                   dialog.textContent = (`Yes! That's correct!. The answer is "${currentQuestion.correct}"!`)
                    
                    dialog.appendChild(closeDialog)
                    closeDialog.textContent = ("Next")
                    

                    closeDialog.addEventListener("click" , () =>{
                        dialog.close()


                     
                    
                    
                        
                    })


                } else {
                    closeDialog.addEventListener("click" , () =>{
                        dialog.close()
                    })
                   dialog.textContent = ("Sorry that answer is incorrect. ")
                   dialog.appendChild(closeDialog)
                    closeDialog.textContent = ("Try Again")
                }
               // answer.classList.toggle.event.target()
                
    //button.appendChild(button)
            })
    
        
    }
} 
    }
   


addElement()

/*let button1 = document.getElementById(button1)

button1.addEventListener("click", (event) =>{
    console.log(event)
})


console.log(button)

console.log(`Question ${i + 1}: ${currentQuestion.question}`)
    console.log(`Options: ${currentQuestion.answers.join(", ")}`)
    console.log(`The correct answer is: ${currentQuestion.correct}`)*/