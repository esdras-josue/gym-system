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

const obtenerClientePorId = (req, res) => {

    const { id } = req.params;
    const sql = 'SELECT * FROM cliente WHERE id_cliente = ' + id;

    connection.query(sql, [id], (error, resultado) => {

        if (error) {
            console.log(error);

            res.status(500).json({
                mensaje: 'Error al obtener cliente'
            });

            return;
        }

        if (resultado.length === 0) {
            res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });

            return;
        }

        res.json(resultado[0]);
    });
};

const actualizarCliente = (req, res) => {
    const { id } = req.params;
    const {nombre,apellido,correo,fecha_inscripcion} = req.body;

    const sql = `   
        UPDATE cliente
        SET nombre = ?, apellido = ?, correo = ?, fecha_inscripcion = ?
        WHERE id_cliente = ?`;

    connection.query(sql, [nombre,apellido,correo,fecha_inscripcion,id] ,(error, resultado) => {

        if (error) {
            console.log(error);

            res.status(500).json({
                mensaje: 'Error al actualizar cliente'
            });

            return
        }

        if(resultado.affectedRows === 0) {
            res.status(404).json({
                mensaje: 'El cliente no existe'
            });

            return;
        }

        res.json({
            mensaje: 'Cliente actualizado correctamente',     
        });
    
    });
}


module.exports = {
    obtenerClientes,
    crearCliente,
    obtenerClientePorId,
    actualizarCliente
};