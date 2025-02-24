const fs = require('fs');
const path = require('path');
const reservasPath = path.join(__dirname, '../datos/reserva.json');

const leerReservas = () => {
  const reservasData = fs.readFileSync(reservasPath);
  return JSON.parse(reservasData);
};

const guardarReservas = (reservas) => {
  fs.writeFileSync(reservasPath, JSON.stringify(reservas, null, 2));
};

exports.crearReserva = (req, res) => {
  const reservas = leerReservas();
  const nuevaReserva = {
    id: reservas.length + 1,
    ...req.body,
  };
  reservas.push(nuevaReserva);
  guardarReservas(reservas);
  res.status(201).json(nuevaReserva);
};

exports.obtenerReservas = (req, res) => {
  const reservas = leerReservas();
  res.json(reservas);
};

exports.obtenerReservaPorId = (req, res) => {
  const reservas = leerReservas();
  const reserva = reservas.find((r) => r.id === parseInt(req.params.id));
  if (reserva) {
    res.json(reserva);
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

exports.actualizarReserva = (req, res) => {
  const reservas = leerReservas();
  const reservaIndex = reservas.findIndex((r) => r.id === parseInt(req.params.id));
  if (reservaIndex !== -1) {
    reservas[reservaIndex] = { id: parseInt(req.params.id), ...req.body };
    guardarReservas(reservas);
    res.json(reservas[reservaIndex]);
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};

exports.eliminarReserva = (req, res) => {
  const reservas = leerReservas();
  const nuevaListaReservas = reservas.filter((r) => r.id !== parseInt(req.params.id));
  if (reservas.length !== nuevaListaReservas.length) {
    guardarReservas(nuevaListaReservas);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Reserva no encontrada' });
  }
};
