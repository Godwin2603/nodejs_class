const express = require('express'); 
const path = require("path")

const app = express();             


//serve static file
// app.use(express.static(path.join(__dirname, "")))

//middleware
app.use(express.urlencoded({extended: true}))


//Routes
app.get('/', (req, res) => {       
  res.sendFile(path.join(__dirname, 'templates/index.html'))  
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'templates/about.html'))  
})
app.get('/signup', (req,res) => {
    res.sendFile(path.join(__dirname, 'templates/signup.html'))  
})

//post
app.post('/signup', (req,res) => {
  res.send('Welcome to signup')
})


//put

//patch

//delete

//404 handler
app.use((req,res) =>{
  res.status(404).sendFile(path.join(__dirname, 'templates/not-found.html'))  
})

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});              

