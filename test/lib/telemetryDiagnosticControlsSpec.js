"use strict";
const expect = require("chai").expect;
const sinon = require("sinon");
const TelemetryDiagnosticControls = require("../../lib/TelemetryDiagnosticControls");
const TelemetryClient = require("../../lib/TelemetryClient");

describe("TelemetryDiagnosticControls", function () {
  describe("#checkTransmission", function () {
    context("telemetry client is offline", function() {
      it("throws an error if it cannot reconnect", function () {
        let diagnosticControls = new TelemetryDiagnosticControls();
        diagnosticControls._telemetryClient.onlineStatus = function () { return false; };
        // This fails with an error:
        // expected [Function] to throw error including 'Unable to connect' but got 'Cannot set property "_diagnosticInfo" of undefined'
        // I cannot explain this shitty behavior
        expect(diagnosticControls.checkTransmission).to.throw("Unable to connect");
      });
    });
  });
});
