'use strict';

const Alarm = require('../../lib/Alarm.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Tire Pressure Monitoring System', function () {
  describe('Alarm', function () {
    context('pressure is below alarm threshold', function() {
      let mockSensor = {
        getTirePressure() { return 14; }
      };
      it('is in the alarm state', function () {
        let alarm = new Alarm({lowPressureThreshold: 15, sensor: mockSensor});
        alarm.check();
        expect(alarm.alarmOn).to.eq(true);
      });
      it('reports low pressure', function () {
        let alarm = new Alarm({sensor: mockSensor});
        alarm.check();
        expect(alarm.message).to.eq('low pressure');
      });
    });
    context('pressure is above the alarm threshold', function() {
      let mockSensor = {
        getTirePressure() { return 23; }
      };
      it('is in the alarm state', function () {
        let alarm = new Alarm({highPressureThreshold: 22, sensor: mockSensor});
        alarm.check();
        expect(alarm.alarmOn).to.eq(true);
      });
      it('reports high pressure', function () {
        let alarm = new Alarm({sensor: mockSensor});
        alarm.check();
        expect(alarm.message).to.eq('high pressure');
      });
    });
    context('pressure is between the thresholds', function() {
      it('is in the alarm state', function () {
        let mockSensor = {
          getTirePressure() { return 20; }
        };
        let alarm = new Alarm({sensor: mockSensor});
        alarm.check();
        expect(alarm.alarmOn).to.eq(false);
      });
      it('reports no errors', function () {
        let mockSensor = {
          getTirePressure() { return 20; }
        };
        let alarm = new Alarm({sensor: mockSensor});
        alarm.check();
        expect(alarm.message).to.eq(undefined);
      });
    });
  });
});
