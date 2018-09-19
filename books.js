const pg = require('pg');

const conString = prrocess.env.DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', error => {
  console.error(error);
});

// Helper callback functions for server.js
function getBooks(req, res) {
  const SQL = 'SELECT title, author, image_url FROM books;';
  client.query(SQL)
  .then((result) => {
    res.render('index', {
      pageTitle: 'All the books:',
      books: result.rows
    });
  });
}