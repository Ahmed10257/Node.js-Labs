const { log } = require("util");
const Ticket = require("./ticket");
const ticket = new Ticket(1, 123, "LAX", "JFK", "10/20/2021");

console.log(ticket.display());

ticket.update(2, 456, "JFK", "LAX", "10/21/2021");

console.log(ticket.display());
