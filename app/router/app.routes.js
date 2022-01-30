const { Router } = require('express')

const BooksService = require("../service/books.search")

const router = Router();

router.get("/books", BooksService.getBooks );
router.get("/books/:id", BooksService.getBooksById );

module.exports =  { router };