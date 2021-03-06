'use strict';


const express = require('express');
const ejs = require('ejs');
require('dotenv').config();


const PORT = process.env.PORT;
const app = express();

// Include books.js for helper callbacks
const books = require('./books');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));


app.set('view engine', 'ejs');

// books index: show all of the books
app.get('/', (req, res) => res.redirect('/books'));
app.get('/books', books.getBooks);
app.get('/books/new', (req, res) => res.render('pages/new'));


// books show details of one book
app.get('/books/:id/:new', books.getOneBook);
app.get('/searches/new', (req, res) => res.render('searches/new'));

app.post('/books', books.createBook);
app.get('/books/search', books.searchBook)
app.use((req, res) => res.render('pages/error'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});