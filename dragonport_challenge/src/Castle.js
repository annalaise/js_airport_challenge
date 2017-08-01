function Castle() {
  this._dragons = [];
}

Castle.prototype.dragons =function() {
  return this._dragons;
}

Castle.prototype.land = function(dragon) {
  this._dragons.push(dragon);
}
