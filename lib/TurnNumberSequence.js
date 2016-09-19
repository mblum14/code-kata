TurnNumberSequence = {
  _turnNumbers: {},
  next: function(color) {
    if (!TurnNumberSequence._turnNumbers[color]) {
      TurnNumberSequence._turnNumbers[color] = 1;
    }
    return TurnNumberSequence._turnNumbers[color]++;
  }
};

module.exports = TurnNumberSequence;
