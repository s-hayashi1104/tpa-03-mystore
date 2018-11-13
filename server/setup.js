const db = require('./db/connection');

const setup = function(app) {
  app.get('/api/items', (req, res) => {
    const connection = db.connect();
    connection.query('select id, name, price, image_url from ‘items’;',
      function(err, rows, fields) {
        res.json({
          rows,
          fields,
        });
      });
  });
};

module.exports = setup;
