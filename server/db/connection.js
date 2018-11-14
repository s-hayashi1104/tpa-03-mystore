const mysql = require('mysql2/promise');

module.exports = {
  getConnection: (async() => {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Sju$34Tuf62Erqw1',
      database: 'my_store',
    });
    return connection;
  }),
};

/**

sample query using this mysql connection:

const db = require('./db/connection');

db.getConnection()
  .then(dbConnection => {
    return dbConnection.query('select * from items');
  })
  .then(([rows]) => {
    console.log(rows); // log each row selected
  });

*/
