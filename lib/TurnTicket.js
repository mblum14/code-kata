'use strict';

class TurnTicket {
  constructor(turnNumber) {
    this.turnNumber = turnNumber;
  }

  get turnNumber() {
    return this.turnNumber;
  }
}

module.exports = TurnTicket;
