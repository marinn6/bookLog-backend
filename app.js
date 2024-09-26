const express = require("express");


const booksController = require('./controllers/booksControllers')
const cors = require("cors");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use('/books', booksController)
app.use('/public', express.static('public'));

// Serve static files from the 'public' directory
// app.use('/public', express.static(path.join(__dirname, 'public')));

//localhost:3002
app.get('/', (req, res) => {
    res.send("Welcome to the LitLog App!");
});

app.get('*', (req, res) => {
    res.status(404).send("Page Not Found")
});

module.exports = app;