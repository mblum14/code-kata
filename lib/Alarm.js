'use strict';

const Sensor = require('./Sensor');

class Alarm {
  constructor(opts) {
    this.lowPressureTreshold = opts.lowPressureThreshold || 17;
    this.highPressureTreshold = opts.highPressureThreshold || 21;
    this.sensor = opts.sensor || Sensor;
    this.alarmOn = false;
    this.message = undefined;
  }

  check() {
    var psiPressureValue = this.sensor.getTirePressure();

    if (psiPressureValue < this.lowPressureTreshold) {
      this.message = 'low pressure';
    } else if (this.highPressureTreshold < psiPressureValue) {
      this.message = 'high pressure';
    } else {
    }
    if (this.message) this.alarmOn = true;
  }

  alarmOn() {
    return this.alarmOn;
  }
}

module.exports = Alarm;
