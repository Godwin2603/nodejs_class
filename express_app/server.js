const express = require("express");
const path = require("path");
const PORT = 3000;
const coreRoutes = require("./src/routes/api");
const authRoutes = require("./src/routes/api/auth.routes");
const userRoutes = require("./src/routes/api/user.routes");
const fileRoutes = require("./src/routes/api/file.routes");

// const upload_ = multer({ storage: multer.memoryStorage() }); //memory storage (buffer)
// const ejs = require("ejs");

const app = express();
// const session = require("express-session");

//serve static file
app.use(express.static(path.join(__dirname, "static")));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   session({
//     secret: "mysecret123",
//     resave: false,
//     saveUninitialized: true,
//   })
// );
app.use("/", coreRoutes);
app.use("/", authRoutes);
app.use("/users", userRoutes);
app.use("/files", fileRoutes);

//setting ejs
// app.set("view engine", "ejs");
// app.set("views", "./views");

//Routes
//application level middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
//post
// app.post('/signup', (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     req.session.message = "Please fill all fields.";
//     req.session.messageType = "error";
//     return res.redirect('/signup');
//   }

//   req.session.message = "Signup successful!";
//   req.session.messageType = "success";

//   return res.redirect('/signup');
// });

// app.get('/signup', (req, res) => {
//   const message = req.session.message;
//   const messageType = req.session.messageType;

//   req.session.message = null;
//   req.session.messageType = null;

//   res.send(`
//     <script>
//       window.sessionMessage = ${JSON.stringify(message)};
//       window.sessionMessageType = ${JSON.stringify(messageType)};
//     </script>
//     ${require('fs').readFileSync(path.join(__dirname, 'templates/signup.html'), "utf8")}
//   `);
// });

//put

//patch

//delete

//404 handler
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "templates/not-found.html"));
// });

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
