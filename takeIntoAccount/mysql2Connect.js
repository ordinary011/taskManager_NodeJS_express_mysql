const mysql = require('mysql2');

module.exports = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'task_manager',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

await db.promise().query(`INSERT INTO user(name, lastName, email, password, gender_id) VALUE ('${name}', '${lastName}', '${email}', '${password}', '${gender_id}');`);