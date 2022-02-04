const mysql = require('mysql');

// my sql connection 

const databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
});

databaseConnection.connect(function(error){
    if(error) throw error;
    console.log(" Blog Database connected");
})

module.exports = databaseConnection;