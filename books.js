const pg = require('pg');

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
      pageTitle: 'All the books:',
      books: result.rows
    });
  });
}

function getOneBook(req, res) {
  let SQL = 'SELECT * FROM books WHERE id = $1';
  let values = [req.params.id];
  client.query(SQL, values, (err, result) => {
    if(err){
      console.error(err);
      res.redirect('/error');
    }else{
      res.render('show', {book: result.rows[0]});
    }
  })
}

module.exports = {
  getBooks: getBooks,
  getOneBook: getOneBook
};