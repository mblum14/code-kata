'use strict';

const Sensor = require('./Sensor');

class Alarm {
  constructor() {
    this._lowPressureTreshold = 17;
    this._highPressureTreshold = 21;
    this._sensor = new Sensor();
    this._alarmOn = false;
  }

  check() {
    var psiPressureValue = this._sensor.popNextPressurePsiValue();

    if (psiPressureValue < this._lowPressureTreshold || this._highPressureTreshold < psiPressureValue) {
      this._alarmOn = true;
    }
  }

  alarmOn() {
    return this._alarmOn;
  }
}

module.exports = Alarm;
