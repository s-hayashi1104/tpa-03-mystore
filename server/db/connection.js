const mysql = require('mysql2/promise');

module.exports = {
  getConnection: (async() => {
    return await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Sju$34Tuf62Erqw1',
      database: 'my_store',
    });
  }),
};
