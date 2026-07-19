
//console.log(quiz[0].question)
//console.log(quiz[1].choices)


function buildBackground(){
    const background = document.createElement('div')
    document.body.appendChild(background)
    return background
}
buildBackground()

function buildHeader(){
    const title = document.createElement('h1')
    const heroContainer = document.createElement("div")
    heroContainer.appendChild(title)
    document.body.appendChild(heroContainer)
    title.textContent = ("CoreQuery")
    title.classList = "title"

}
buildHeader()


function buildQuizContainer(){
    const quizContainer = document.createElement('div')
    document.body.appendChild(quizContainer)
    quizContainer.textContent = ("Placeholder")
    return quizContainer
}
const quizContainer = buildQuizContainer()




//const apiKey = ''
//'url' is a user created var and will need to be declared more precisely with larger programs 
const url = ''

//async keyword is mandatory for async function declaration
async function getQuiz() {
//try...catch is a control flow statement made of two blocks
    try {
       //same as with 'url', 'response' will need more care in defining re larger apps
       //await is a mandatory keyword when call fetch in async block (eg: order has been sent to the resturant)
       //fetch returns promise; when promise resolves the value it returns is a Response ('res') object
       //making api fetch request to node server route
        const response = await fetch('./api/quiz')
      
        if (!response.ok) {
            //'throw' and 'new' are mandatory keywords, 'Error' is a constructor (constructor is a 'blueprint' method used to build specific type of object)
            //remember that methods and constructors are functions
            //'status' is mandatory keyword
            //throw stops function or, in this case, stops the 'if' statement

            throw new Error(`HTTP error: ${response.status}`)

      }  //using 'data' is a convention but not baked into js
        // 'await is being used here to pause the response until Promise is fulfilled (eg. order from restuarant has been recieved and the bag has been opened )
        const quizData = await response.json()
        
        renderQuestions(quizData, quizContainer)
        console.log(quizData.results)
  
         
    }
    //try...catch is a control flow statement made of two blocks
    //'error' is a convention and not a keyword
    catch (error){
        console.error("Could not retrieve quiz:", error)
        handleError(error)
    }  
    
    function handleError(error) {
        const err = document.createElement("dialog")
        document.body.appendChild(err)
        err.textContent = 'Could not retrieve quiz'
        err.showModal()
        err.addEventListener("click", () =>  {
            err.close()
        }) 
    }

}

getQuiz()





function renderQuestions(quizData, quizContainer){

    for(let i = 0; i < quizData.length; i++){
        const questionDiv = document.createElement("div")
        const currentQuestion = quizData[i]
        questionDiv.textContent = (currentQuestion.question) 
        quizContainer.appendChild(questionDiv)
        renderAnswers(currentQuestion,questionDiv)
    }    
}

function renderAnswers(currentQuestion, questionDiv){

        for(let j = 0; j < currentQuestion.choices.length; j++){
            
            const button = document.createElement("button")
            const createDiv = document.createElement("div")
          
            questionDiv.appendChild(createDiv)
            questionDiv.appendChild(button)
            createDiv.textContent = (currentQuestion.choices[j])
            button.appendChild(createDiv)
            button.addEventListener('click', (event) => {
                const isCorrect = event.target.innerText === currentQuestion.correct
                    showFeedbackDialog(isCorrect, currentQuestion)
            })

        }            
}
function showFeedbackDialog(isCorrect, currentQuestion){            

                const dialog = document.createElement("dialog")
                const closeDialog = document.createElement("button")
                document.body.appendChild(dialog)
                dialog.showModal()
                if (isCorrect) {
                    
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
                      
    }


   







