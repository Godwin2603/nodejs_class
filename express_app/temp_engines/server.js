const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')


app.use(express.static(path.join(__dirname, "static")));
// 1. Configure the View Engine
// This tells Express to use 'ejs' for rendering templates.
app.set('view engine', 'ejs');

// 2. Set the 'views' directory (where EJS files are located)
// We set it to the 'views' folder we created.
app.set('views', './views');

// 3. Define a Route to Render the Template
app.get('/', (req, res) => {
  // Define the data model (JavaScript object)
  const userData = {
    pageTitle: 'EJS Demo Page',
    user: {
      name: ' Dev',
      skills: ['Express', 'Node.js', 'EJS', 'HTML'],
      isNew: true
    }
  };
  
  // Use res.render() to combine the 'index.ejs' template with userData
  res.render('index', userData);
});
app.get('/about', (req, res) => {
  // Define data specific to the about page
  const aboutData = {
    pageTitle: 'About Our Application',
    currentYear: new Date().getFullYear(),
    team: ['Alice', 'Bob', 'Charlie']
  };

  // Express will look for views/about.ejs
  res.render('about', aboutData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});