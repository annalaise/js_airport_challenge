describe('Dragon', function() {

  var dragon;

  beforeEach(function() {
    dragon = new Dragon();
  });

  describe('landing', function() {
    it('lands at a castle', function() {
      expect(dragon.land('dragonstone')).toBe(true);
    });
  });

  describe('fly away', function() {
    it('flies away into the sky', function() {
      expect(dragon.fly('dragonstone')).toBe(true);
    });
  });

});
