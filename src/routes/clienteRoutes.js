const express = require('express');
const router = express.Router();

const {
    obtenerClientes,
    crearCliente,
    obtenerClientePorId,
    actualizarCliente
} = require('../controllers/clienteController');

router.get('/', obtenerClientes);
router.get('/:id',obtenerClientePorId);
router.post('/', crearCliente);
router.put('/:id', actualizarCliente);


module.exports = router;