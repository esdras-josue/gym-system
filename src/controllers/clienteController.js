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

const crearCliente = (req, res) => {

    const { nombre, apellido, telefono, correo, fecha_inscripcion } = req.body;
    const sql = `
        INSERT INTO cliente
        (nombre, apellido, telefono, correo, fecha_inscripcion)
        VALUES (?, ?, ?, ?, ?)
    `;

    const valores = [
        nombre,
        apellido,
        telefono,
        correo,
        fecha_inscripcion,
    ];

    connection.query(sql,valores, (error, resultado) => {

        if (error) {
            console.log(error);

            res.status(500).json({
                mensaje: 'Error al crear cliente'
            });

            return
        }

        res.json({
            mensaje: 'Cliente creado correctamente',
            id_cliente: resultado.insertId,
        });
    });
};


module.exports = {
    obtenerClientes,
    crearCliente,
};