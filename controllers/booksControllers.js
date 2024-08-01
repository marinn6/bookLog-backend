//import express
const express = require('express')
const books = express.Router()

books.get("/", async (req, res) => {
    const allBooks = await getAllBooks()
    if(allBooks[0]){
        res.status(200).json(allBooks)
    } else {
        res.status(404).json({ error: "Books Not Found"})
    }
})

module.exports = books