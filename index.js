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
    title.textContent = ("Quiz App")
    title.classList = "title"

}
buildHeader()

function buildQuizContainer(){
    const quizContainer = document.createElement('div')
    document.body.appendChild(quizContainer)
    quizContainer.textContent = ("Placeholder")
}
buildQuizContainer()



//const apiKey = ''
//'url' is a user created var and will need to be declared more precisely with larger programs 
const url = 'https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=multiple&encode=url3986'

//async keyword is mandatory for async function declaration
async function getQuiz() {
//try...catch is a control flow statement made of two blocks
    try {
       //same as with 'url', 'response' will need more care in defining re larger apps
       //await is a mandatory keyword when call fetch in async block (eg: order has been sent to the restuarant)
       //fetch returns promise; when promise resolves the value it returns is a Response ('res') object
        const response = await fetch(url)
      
        if (!response.ok) {
            //'throw' and 'new' are mandatory keywords, 'Error' is a constructor (constructor is a 'blueprint' method used to build specific type of object)
            //remember that methods and constructors are functions
            //'status' is mandatory keyword
            //throw stops function or, in this case, stops the 'if' statement

            throw new Error(`HTTP error: ${response.status}`)
            


      }  //using 'data' is a convention but not baked into js
        // 'await is being used here to pause the response until Promise is fulfilled (eg. order from restuarant has been recieved and the bag has been opened )
        const quizData = await response.json()
        
        buildDOMRender(quizData)
        console.log(quizData)
  
         
    }
    //try...catch is a control flow statement made of two blocks
    //'error' is a convention and not a keyword
    catch (error){
        console.error("Could not retrieve quiz:", error)
        //handleError(error)
    }  
    
   /* function handleError(error) {
        const err = document.createElement("dialog")
        document.body.appendChild(err)
        err.textContent = 'Could not retrieve quiz'
        err.showModal()
        err.addEventListener("click", () =>  {
            err.close()
        }) */


}
getQuiz()


function buildDOMRender(quizData){

    //quizData.textContent = 

    for(let i = 0; i < quiz.length; i++){
        let currentQuestion = quiz[i]
        let createDiv = document.createElement("div")
        createDiv.textContent = (currentQuestion.question) 
        document.body.appendChild(createDiv)
        
        for(let j = 0; j < currentQuestion.answers.length; j++){
            
            let button = document.createElement("button")
            createDiv = document.createElement("div")
          
            document.body.appendChild(createDiv)
            document.body.appendChild(button)
            createDiv.textContent = (currentQuestion.answers[j])
            button.appendChild(createDiv)
            button.addEventListener("click", (event) => {
                //refactor 'dialog' so that the var name and element are not the same
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
              
            })
    
        
    }
} 
}
   




