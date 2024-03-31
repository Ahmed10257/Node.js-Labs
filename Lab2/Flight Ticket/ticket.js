const events = require("events");

class Ticket extends events.EventEmitter {
  #seatNumber = 0;
  #flightNumber = 0;
  #departAirport = "";
  #arriveAirport = "";
  #travelDate = "";
  Contructors;
  constructor(
    seatNumber,
    flightNumber,
    departAirport,
    arriveAirport,
    travelDate
  ) {
    super();
    this.#seatNumber = seatNumber;
    this.#flightNumber = flightNumber;
    this.#departAirport = departAirport;
    this.#arriveAirport = arriveAirport;
    this.#travelDate = travelDate;
  }
  //Methods
  display() {
    return {
      seatNumber: this.#seatNumber,
      flightNumber: this.#flightNumber,
      departAirport: this.#departAirport,
      arriveAirport: this.#arriveAirport,
      travelDate: this.#travelDate,
    };
  }

  update(seatNumber, flightNumber, departAirport, arriveAirport, travelDate) {
    this.#seatNumber = seatNumber;
    this.#flightNumber = flightNumber;
    this.#departAirport = departAirport;
    this.#arriveAirport = arriveAirport;
    this.#travelDate = travelDate;
  }
}

module.exports = Ticket;
