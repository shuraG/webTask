const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'casa',
    database: 'web_task_app'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');    
});

module.exports = connection;