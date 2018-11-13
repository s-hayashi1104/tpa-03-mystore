const db = require('./db/connection');

const setup = function(app) {
  app.get('/api/items', async(req, res) => {
    const connection = await db.getConnection();
    const [row, field] = await connection.query('select `id`, `name`, `price`, `image_url` from `items`');
    res.json({
      row,
      field
    });
  });
};

module.exports = setup;
