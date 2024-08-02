//import express
const express = require('express')
const books = express.Router()
const { getAllBooks, getBookbyId, createBook, deleteBook, updateBook } = require('../queries/books')

//Index: locahost:3002/books
books.get("/", async (req, res) => {
    const allBooks = await getAllBooks()
    if(allBooks.length > 0){
        res.status(200).json(allBooks)
    } else {
        res.status(404).json({ error: "Books Not Found" })
    }
});

//Show: localhost:3002/books/1
books.get("/:id", async (req, res) => {
    const { id } = req.params
    const singleBook = await getBookbyId(id)
    if(singleBook.id){
        res.status(200).json(singleBook)
    } else {
        res.status(404).json({ error: "Book Not Found" })
    }
});

//Create: localhost:3002/books
books.post('/', async (req, res) => {
    const newBook = await createBook(req.body)
    res.status(201).json(newBook)
});


//Delete: localhost:3002/books/id
books.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedBook = await deleteBook(id)
        if (deletedBook.id) {
            res.status(200).json({ messgae: "Successfully deleted book." })
        } else {
            res.status(404).json({ error: "Book Not Found" })
        }
    } catch (error) {
        console.error(`Error deleting book with id: ${id}`)
    }
});

//Update: localhost:3002/books/id
books.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedBook = await updateBook(id, req.body)
    console.log(updatedBook)
    if(updatedBook.id){
        res.status(200).json(updatedBook)
    } else {
        res.status(404).json({ error: "Book Not Found" })
    }
});



module.exports = books