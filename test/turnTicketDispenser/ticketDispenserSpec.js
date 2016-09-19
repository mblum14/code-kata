'use strict';

const TicketDispenser = require('../../lib/TicketDispenser');
const expect = require('chai').expect;

describe('Turn Ticket Dispenser', function () {
  describe('TurnTicketDispenser', function () {
    context('only one color', function() {
      let ticket_1 = TicketDispenser.getTurnTicket('red');
      let ticket_2 = TicketDispenser.getTurnTicket('red');
      let ticket_3 = TicketDispenser.getTurnTicket('red');
      it('Dispenses a tickets in sequence', function () {
        expect(ticket_1.turnNumber).to.eq(1);
        expect(ticket_2.turnNumber).to.eq(2);
        expect(ticket_3.turnNumber).to.eq(3);
      });
      it('Assigns a color', function() {
        expect(ticket_1.color).to.eq('red');
        expect(ticket_2.color).to.eq('red');
        expect(ticket_3.color).to.eq('red');
      });
    });
    context('multiple colors', function() {
      let ticket_1 = TicketDispenser.getTurnTicket('purple');
      let ticket_2 = TicketDispenser.getTurnTicket('purple');
      let ticket_3 = TicketDispenser.getTurnTicket('yellow');
      let ticket_4 = TicketDispenser.getTurnTicket('blue');
      let ticket_5 = TicketDispenser.getTurnTicket('blue');
      let ticket_6 = TicketDispenser.getTurnTicket('green');
      it('Dispenses a tickets in sequence', function () {
        expect(ticket_1.turnNumber).to.eq(1);
        expect(ticket_2.turnNumber).to.eq(2);
        expect(ticket_3.turnNumber).to.eq(1);
        expect(ticket_4.turnNumber).to.eq(1);
        expect(ticket_5.turnNumber).to.eq(2);
        expect(ticket_6.turnNumber).to.eq(1);
      });
      it('Assigns a color', function() {
        expect(ticket_1.color).to.eq('purple');
        expect(ticket_2.color).to.eq('purple');
        expect(ticket_3.color).to.eq('yellow');
        expect(ticket_4.color).to.eq('blue');
        expect(ticket_5.color).to.eq('blue');
        expect(ticket_6.color).to.eq('green');
      });
    });
  });
});
