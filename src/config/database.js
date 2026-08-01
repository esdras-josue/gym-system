const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gestion_gimnasio'
});

connection.connect((error) => {
    if(error) {
        console.log('Error conectando a MySQL', error);
    }

    console.log('Conectado a MySQL correctamente');
});

module.exports = connection;