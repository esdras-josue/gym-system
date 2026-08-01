const connection = require('../config/database');

const obtenerClientes = (req, res) => {

    const sql = 'SELECT * FROM cliente';

    connection.query(sql, (error, resultados) => {

        if (error) {
            console.log(error);

            res.status(500).json({
                mensaje: 'Error al obtener clientes'
            });

            return;
        }

        res.json(resultados);
    });

};


module.exports = {
    obtenerClientes
};