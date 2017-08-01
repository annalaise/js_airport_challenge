function Castle(capacity) {
  this._dragons = [];
  this._dragonsCapacity = capacity;
  this._call = false
  this._CHANCE_OF_CALL = 0.5;
}

Castle.prototype.dragons =function() {
  return this._dragons;
}

Castle.prototype.land = function(dragon) {
  if (this._call && (this._dragons.length < this._dragonsCapacity)) {
    this._dragons.push(dragon);
  } else {
    return 'NOO Dragon! not needed today'
  }
}

Castle.prototype.flyOff = function(dragon) {
  var index = this._dragons.indexOf(dragon)
  this._dragons.splice(index, 1);
}

Castle.prototype.rand = function() {
  if (Math.random() > this._CHANCE_OF_CALL) {
    return true
  }
}

Castle.prototype.princessCall = function(dragon) {
  if (this.rand()) {
    this._call = true;
  }
}
