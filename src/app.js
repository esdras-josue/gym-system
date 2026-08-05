const express = require('express');
const cors = require('cors');
require('./config/database');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');

app.use(express.json());


app.use('/clientes', clienteRoutes);

app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000');
});