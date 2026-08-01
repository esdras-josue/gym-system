const express = require('express');
const router = express.Router();

const {
    obtenerClientes
} = require('../controllers/clienteController');

router.get('/', obtenerClientes);

module.exports = router;