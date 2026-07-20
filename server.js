

//"http" lets Node create a web server; built into node

//'require' is a built-in node keyword
//'http' is an object
const http = require("http");

//'fs' lets node read files
const fs = require('fs/promises');

//'path' helps build file paths that work on multiple os
const path = require('path');
const { resolve } = require("dns");

//choose higher ports like '3000' or '8080' to prevent errors
//most services and common apps stick to lower ports 
//ship at ports '80'or '443' if not occupied
const PORT = 8080;

//this will live in schema.sql
const quiz = [
    {question: 'Who is considered the father of computer science?', choices: ['a. Alan Turing', 'b. Bill Gates', 'c. Steve Jobs', 'd: Ada Lovelace'], correct: 'a. Alan Turing'},
    {question: 'What year was the first computer bug discovered?', choices: ['a. 1945', 'b. 1951', 'c. 1937', 'd. 1965'], correct: 'a. 1945'}, {question: 'Who was the first Black woman to earn a PhD in computer science?', choices:['a. Kimberly Bryant', 'b. Grace Hopper', 'c. Joy Buolamwini', 'd. Shirley Ann Jackson'], correct: 'd. Shirley Ann Jackson'}
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
        try { 
            
            //these 'if' statements just handle different requests coming from the front end. 

            //request.url: When a browser connects to a server, it sends a request object. request.url contains the path of what the browser is looking for (e.g., /, /about, or /index.js).
            
            //receiving fetch request from frontend
            //'api' is route structure
            //'url' built-in property tells you what path was requsted
            if (request.url === "/api/quiz") {

                //tell browser we're sending JSON
                //writeHead is a built-in method
                //lets you set status code - '200' is successful
                //header goes next, in this case a json payload
                response.writeHead(200, {
                    'Content-Type': 'application/json'
                } );

                // send JSON back
                //response.end object and method is book-end eg. 'promise fulfilled' or problem reported
                //'stringify' is a method that tell js to parse the json package back into a usable object
                //'quiz' is shorthand for a key/value object
                response.end(JSON.stringify(quiz)
            );
            //'return' is a guard clause. if condition is met, exit function
            return;
        }

        // Serve index.html

        //'/' just means root route of API. even though API call is made from js file, the js file is still linked to the html 'root'.  
        // this line checks if the browser is specifically asking for the root homepage 
        //// NOTE (future me): this route model is static/server-based — every URL
        // hits the Node server directly. Once using React/Next.js, this becomes
        // an SPA (Single Page Application) — routing happens client-side in the
        // browser after one initial HTML load, not via repeated server requests. 
            if (request.url === '/') {
            //creates a var to store absloute path to file on hard drive
            //path.join is a built-in Node.js utility; instead of typing out whole file path, path.join glues pieces of the path together 
                const filePath = path.join(
            //special global var in Node that points to the absolute path of the directory where the currently running code file lives (written just like any other var arg would)   
            // '__' is called a 'dunder'. it's used to denotw a Node.js Global vs a var that I declared myself
                __dirname,
            //these are the dir and file names being targeted    
                'public', 'index.html'
            );
            //wait until the file is completely read
            //'fs' is a built-in core module = 'file system'
            //'readFile' is a native method
            //tells program to go into the hard drive and open up a speciic ile
            //'await' is being used to wait for a response. just like with api calls, a promise is issued even if the 'await' keyword is being used in a local environment. 
            //'filePath' is a var declared earlier in the program
                const data = await fs.readFile(filePath);

                response.writeHead(200, {
                    "Content-Type": "text/html"
            });

            response.end(data);

            return;
        }

            if (request.url === "/index.js"){

                const filePath = path.join(
                    __dirname, 'public', 'index.js'
                );

                const data = await fs.readFile(filePath);

                response.writeHead(200, {
            //'application/javascript' is just letting the program know what kind of data to expect
                'Content-Type': 'application/javascript'
            });
            
            response.end(data);

            return;

        }

            if (request.url === '/index.css') {

                const filePath = path.join(
                    __dirname, 'public', 'index.css'
                );

                const data = await fs.readFile(filePath);

                response.writeHead(200, {
                    'Content-type': 'text/css'
                });

                response.end(data);

                return;
            }
            // Dynamic route helper to catch ANY image request inside the /images folder
            // NOTE FOR PORTFOLIO: I originally had individual 'if' statements for every image. 
            // When adding a second image asset, I realized it created a DRY violation. 
            // I refactored just the image directory to dynamically resolve MIME types as a 
            // bridge toward V2, where Express will abstract file-serving completely.   
            if (request.url.startsWith('/images/')) {

            // 1. Map out just the image types you expect to use
                const IMAGE_MIME_TYPES = {
                '.jpeg': 'image/jpeg',
                '.jpg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif'
                };

                //replace img file path with request.url method
                const filePath = path.join(
                    __dirname, 'public', request.url
                );
                //The path.extname(request.url) method in Node.js extracts the file extension (e.g., .html, .css) from a request URL string. It returns the extension from the last occurrence of a period (.) to the end of the string.
                const ext = path.extname(request.url);

                //'application/octet-stream' is the official MDN Web Docs definition for generic, arbitrary binary data
                const contentType = IMAGE_MIME_TYPES[ext] || 'application/octet-stream';
                const data = await fs.readFile(filePath);

                response.writeHead(200, {
                    'Content-Type': contentType
                });

                response.end(data)

                return;
            }
            // request not found - '404'

            response.writeHead(404); 

            response.end('404 Not Found');

        }

        catch (error) {

            console.log(error);

            response.writeHead(500);

            response.end('Internal Server Error')
        }
    });

    // start the server

    server.listen(PORT, () => {

        console.log(`Server running at http://localhost:${PORT}`);

    });
    

       

