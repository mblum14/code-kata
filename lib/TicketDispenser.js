'use strict';
const TurnNumberSequence = require('./TurnNumberSequence');
const TurnTicket = require('./TurnTicket');

class TicketDispenser {

  static getTurnTicket() {
    let newTurnNumber = TurnNumberSequence.getNextTurnNumber();
    let newTurnTicket = new TurnTicket(newTurnNumber);
    return newTurnTicket;
  }

};

module.exports = TicketDispenser;
