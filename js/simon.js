function Simon() {
  this.actualColors = [];
  this.playerColors = [];
}

Simon.prototype.chooseColors = function() {
  var possibleColors = ["red", "yellow", "green", "blue"];
  var random = Math.floor(Math.random() * 4);
  this.actualColors.push(possibleColors[random]);
}

Simon.prototype.evaluateArrays = function() {
  if (this.actualColors.length === this.playerColors.length) {
    for (var i = 0; i < this.actualColors.length; i++) {
      if (this.actualColors[i] === this.playerColors[i]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

exports.simonModule = Simon;
