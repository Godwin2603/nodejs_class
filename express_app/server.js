const express = require('express'); 
const path = require("path")
const session = require("express-session");
const PORT = 3000

const app = express();             


//serve static file
app.use(express.static(path.join(__dirname, "static")))

//middleware
app.use(express.urlencoded({extended: true}))

app.use(
  session({
    secret: "mysecret123",
    resave: false,
    saveUninitialized: true,
  })
);

//Routes
app.get('/', (req, res) => {       
  res.sendFile(path.join(__dirname, 'templates/index.html'))  
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'templates/about.html'))  
})
// app.get('/signup', (req,res) => {
//     res.sendFile(path.join(__dirname, 'templates/signup.html'))  
// })



//post
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    req.session.message = "Please fill all fields.";
    req.session.messageType = "error";
    return res.redirect('/signup');
  }

  req.session.message = "Signup successful!";
  req.session.messageType = "success";

  return res.redirect('/signup');
});

app.get('/signup', (req, res) => {
  const message = req.session.message;
  const messageType = req.session.messageType;

  req.session.message = null;
  req.session.messageType = null;

  res.send(`
    <script>
      window.sessionMessage = ${JSON.stringify(message)};
      window.sessionMessageType = ${JSON.stringify(messageType)};
    </script>
    ${require('fs').readFileSync(path.join(__dirname, 'templates/signup.html'), "utf8")}
  `);
});
// app.post('/signup', (req,res) => {
//   // console.log('Form data', req.body)
//   // console.log('Form data from query', req.query)
//   const username = req.body.username
//   const email = req.body.email
//   const password = req.body.password
//   if(!username || !email || !password){
//     return res.redirect('/signup?signup=error')
//   }     
//   res.redirect('/signup?signup=sucess')
//   // res.sendFile(path.join(__dirname,'templates/index.html'))
// })


//put

//patch

//delete

//404 handler
app.use((req,res) =>{
  res.status(404).sendFile(path.join(__dirname, 'templates/not-found.html'))  
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});             

