const db = require('./db/connection');

const setup = function(app) {
  app.get('/api/items', async(req, res) => {
    const connection = await db.getConnection;
    console.log(connection);
    connection.query('select id, name, price, image_url from ‘items’;',
      function(err, rows, fields) {
        console.log(rows);
        res.json({
          rows,
          fields,
        });
      });
  });
};

module.exports = setup;
