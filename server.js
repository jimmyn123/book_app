'use strict';


const express = require('express');
const ejs = require('ejs');
require('dotenv').config()

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

// books show details of one book
app.get('/books/:id', books.getOneBook);

app.use((req, res) => res.render('error'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});