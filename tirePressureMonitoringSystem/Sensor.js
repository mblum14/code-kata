'use strict';

class Sensor {
  constructor() {
    this.offset = function() { return 16; };
    this.minPressure = 16;
  }

  popNextPressurePsiValue() {
    let simulatedPressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());

    return this.minPressure + simulatedPressureTelemetryValue;
  }
}

module.exports = Sensor;
