DROP DATABASE IF EXISTS books_dev;

CREATE DATABASE books_dev;

\c books_dev;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    genre TEXT,
    year_published INT,
    total_pages INT,
    isbn VARCHAR(14),
    is_favorite BOOLEAN,
    book_status TEXT,
    book_cover_img TEXT
    CONSTRAINT isbn_length CHECK (CHAR_LENGTH(isbn) = 11 OR CHAR_LENGTH(isbn) = 14)
);