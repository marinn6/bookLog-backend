const express = require("express");
const cors = require("cors");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use('/books',)

//localhost:3002
app.get('/', (req, res) => {
    res.send("Welcome to the LitLog App!");
});

app.get('*', (req, res) => {
    res.status(404).send("Page Not Found")
});

module.exports = app;