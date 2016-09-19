'use strict';

class Sensor {
  static getTirePressure() {
    let simulatedPressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());

    return this.minPressure + simulatedPressureTelemetryValue;
  }
}

module.exports = Sensor;
