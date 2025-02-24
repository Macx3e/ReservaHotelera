const express = require('express');
const app = express();
const reservaRoutes = require('./rutas/reservaRoutes');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/reservas', reservaRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port} en http://localhost:${port}`);
});
