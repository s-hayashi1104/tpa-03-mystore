const db = require('./db/connection');

const setup = function(app) {
  app.get('/api/items', async(req, res) => {
    try {
      const connection = await db.getConnection();
      const [row, field] = await connection.query('select id, name, price, image_url from items');
      res.json({
        row,
        field
      });
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
  app.post('/api/items', async(req, res) => {
    try {
      const connection = await db.getConnection();
      let values = [req.body.name, req.body.price, req.body.image_url];
      let sql = 'insert into items (name, price, image_url) values (?)';
      await connection.query(sql, [values]);
      res.status(200);
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  });
};

module.exports = setup;
