//"http" lets Node create a web server; built into node

//'require' is a built-in node keyword
//'http' is an object
const http = require("http");

//'fs' lets node read files
const fs = require('fs');

//'path' helps build file paths that work on multiple os
const path = require('path');

//choose higher ports like '3000' or '8080' to prevent errors
//most services and common apps stick to lower ports 
//ship at ports '80'or '443' if not occupied
const PORT = 8080;

//this will live in schema.sql
const quiz = [
    {question: 'Who is considered the father of computer science?', choices: ['a. Alan Turing', 'b. Bill Gates', 'c. Steve Jobs', 'd: Ada Lovelace'], correct: 'a. Alan Turing'},
    {question: 'What year was the first computer bug discovered?', choices: ['a. 1945', 'b. 1951', 'c. 1937', 'd. 1965'], correct: 'a.1945'}, {question: 'Who was the first Black woman to earn a PhD in computer science?', choices:['a. Kimberly Bryant', 'b. Grace Hopper', 'c. Joy Buolamwini', 'd. Shirley Ann Jackson'], correct: 'd. Shirley Ann Jackson'}
];


//Create the server

//this function runs at each time site is visited
//API call. One API  call is made from the front end to the back end, and then from the backend to the database/server. In this case, it's just being made to the array of nested objects named 'quiz'

//'http' is a built-in module
//'createServer is a method
//'async' wrapper returns promise, THEN inner wrapper response logic kicks in
//'request' is the incoming request from the front-end
//'response' is the data sent from the back-end
const server = http.createServer(async(request, response) =>{
        try { //receiving fetch request from frontend
            //'api' is route structure
            if (request.url === "/api/quiz")

                //tell browser we're sending JSON
                //writeHead is a built-in method
                response.writeHead()
        }
        catch {

        }
        console.log(request.url)
       
})
