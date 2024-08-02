//Queries is how to get the data from the database

const db = require("../db/dbConfig")

const getAllBooks = async () => {
    try {
        const allBooks = await db.any("SELECT * FROM books");
        return allBooks
    } catch (error) {
        return error;
    }
};

const getBookbyId = async (id) => {
    try {
        const singleBook = await db.one("SELECT * FROM books WHERE id=$1", id)
        return singleBook
    } catch (error){
        return error;
    }
}

const createBook = async(book) => {
    try {
        const newBook = await db.one("INSERT INTO books (title, author, genre, year_published, total_pages, isbn, is_favorite, book_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
        [
            book.title,
            book.author,
            book.genre,
            book.year_published,
            book.total_pages,
            book.isbn,
            book.is_favorite,
            book.book_status
        ]);
        return newBook;
    } catch(error) {
        console.error('Error creating book:', error);
        throw error;
    }
};

const deleteBook = async (id) => {
    try {
        const deletedBook = await db.one("DELETE FROM books WHERE id=$1 RETURNING *", id)
        return deletedBook;
    } catch (error) {
        return error;
    }
};



module.exports = { getAllBooks, getBookbyId, createBook, deleteBook }