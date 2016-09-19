'use strict';

class TelemetryDiagnosticControls {
  constructor() {
    this.diagnosticChannelConnectionString = function() { return '*111#'; };
    this.diagnosticInfo = '';
    this.telemetryClient = new TelemetryClient();
  }

  readDiagnosticInfo() {
    return this.diagnosticInfo;
  }

  writeDiagnosticInfo(newValue) {
    this.diagnosticInfo = newValue;
  }

  checkTransmission() {
    this.diagnosticInfo = '';

    this.telemetryClient.disconnect();

    var retryLeft = 3;
    while (this.telemetryClient.onlineStatus() === false && retryLeft > 0) {
      this.telemetryClient.connect(this.diagnosticChannelConnectionString);
      retryLeft -= 1;
    }

    if (this.telemetryClient.onlineStatus() === false) {
      throw 'Unable to connect';
    }

    this.telemetryClient.send(TelemetryClient.diagnosticMessage());
    this.diagnosticInfo = this.telemetryClient.receive();
  }
}
