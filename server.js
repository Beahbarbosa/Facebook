const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the directory where your HTML files (views) are located
app.set('views', path.join(__dirname, 'views'));

// Optionally, you can define a static files directory (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the HTML file
app.get('/', (req, res) => {
  res.render('index'); // Assuming you have an "index.ejs" file in the "views" directory
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})