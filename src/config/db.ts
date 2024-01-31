import mysql, { Connection } from 'mysql2';

const db: Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dashboard",
});

db.connect((err) => {
    if (err) throw err;
    console.log("SUCCESS - Connected to database");
});

export default db.promise();