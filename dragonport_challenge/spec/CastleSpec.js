describe('Castle', function() {

  var castle;
  var dragon;

  beforeEach(function() {
    castle = new Castle();
    dragon = new Dragon();
    console.log(castle.dragons)
    // dragon.land(castle)
  });

  describe('dragons', function() {
    it('has dragons', function() {
      castle.land(dragon);
      expect(castle.dragons()).toEqual([dragon]);
    });
  });
});
