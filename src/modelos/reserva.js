class Reserva {
    constructor(id, hotel, tipoHabitacion, numHuespedes, fechas, estado) {
        this.id = id;
        this.hotel = hotel;
        this.tipoHabitacion = tipoHabitacion;
        this.numHuespedes = numHuespedes;
        this.fechas = fechas;
        this.estado = estado;
    }
}

module.exports = Reserva;
