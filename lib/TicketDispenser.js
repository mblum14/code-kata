'use strict';
const TurnNumberSequence = require('./TurnNumberSequence');
const TurnTicket = require('./TurnTicket');

class TicketDispenser {

  static getTurnTicket(color) {
    let newTurnNumber = TurnNumberSequence.next(color);
    let newTurnTicket = new TurnTicket(color, newTurnNumber);
    return newTurnTicket;
  }

};

module.exports = TicketDispenser;
