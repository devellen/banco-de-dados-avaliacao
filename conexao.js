const mysql = require('mysql');

function execSQLQuery(sqlQry, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345',
    database: 'cadastro'
  });

  connection.query(sqlQry, function (error, results, fields) {
    if (error)
      res.json(error);
    else
      res.json(results);
    connection.end();
    console.log('executou!');
  });
}

exports.execSQLQuery = execSQLQuery;