import getConnection from './db/connection';
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const setup = require('./setup');

const app = express();

app.use(bodyParser.json());

app.get('/api/items', (req, res) => {
  const connection = getConnection.connect();
  connection.query('select id, name, price, image_url from ‘items’;',
    function (err, rows, fields) {
      res.json({
        row,
        fields,
      });
  });
  
});

setup(app);

app.listen(config.port, () =>
  console.info(`server started on port ${config.port}`)
);

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});
