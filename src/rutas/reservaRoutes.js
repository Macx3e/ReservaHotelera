const express = require('express');
const router = express.Router();
const reservaController = require('../controladores/reservaController');

// Crear una reserva
router.post('/', reservaController.crearReserva);

// Obtener todas las reservas
router.get('/', reservaController.obtenerReservas);

// Obtener una reserva específica por ID
router.get('/:id', reservaController.obtenerReservaPorId);

// Actualizar una reserva por ID
router.put('/:id', reservaController.actualizarReserva);

// Eliminar una reserva por ID
router.delete('/:id', reservaController.eliminarReserva);

module.exports = router;
