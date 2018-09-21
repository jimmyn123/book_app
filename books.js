const pg = require('pg');
const superagent = require('superagent');

const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', error => {
  console.error(error);
});

// Helper callback functions for server.js
function getBooks(req, res) {
  let SQL = 'SELECT id, title, author, image_url FROM books;';
  client.query(SQL)
    .then((result) => {
      res.render('index', {
        books: result.rows
      });
    });
}

function getOneBook(req, res) {
  let SQL = 'SELECT * FROM books WHERE id = $1';
  let values = [req.params.id];
  client.query(SQL, values, (err, result) => {
    if (err) {
      console.error(err);
      res.redirect('/error');
    } else {
      res.render('pages/show', { book: result.rows[0], show: { new: req.params.new } });
    }
  });
}

function createBook(req, res) {
  let SQL = 'INSERT INTO books(title, author, image_url, ISBN, description) VALUES ($1, $2, $3, $4, $5) RETURNING id';
  let values = [
    req.body.title,
    req.body.author,
    req.body.image_url,
    req.body.isbn,
    req.body.description
  ];
  client.query(SQL, values, (err, result) => {
    if (err) {
      console.error(err);
      res.redirect('pages/error');
    } else {
      res.redirect(`/books/${result.rows[0].id}/true`);
    }
  });
}

function searchBook(req, res) {
  const keyword = req.query.keyword;
  const search = req.query.search;

  const query = `https://www.googleapis.com/books/v1/volumes?q=${keyword}${search}`;
  superagent.get(query).end((err, apiResponse) => {
    let books = apiResponse.body.items.map(book => {
      return {
        title: book.volumeInfo.title || 'Untitled',
        author: book.volumeInfo.authors[0] || 'No Author',
        description: book.volumeInfo.description || 'No Description',
        isbn: book.volumeInfo.industryIdentifiers[0].type || -1,
        image_url: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://unsplash.com/photos/MiJTU6lqksg'
      };
    });
    res.render('searches/show', { books: books });
  });
}

module.exports = {
  getBooks: getBooks,
  getOneBook: getOneBook,
  createBook: createBook,
  searchBook: searchBook
}