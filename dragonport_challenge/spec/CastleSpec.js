describe('Castle', function() {

  var castle;
  var dragon;

  beforeEach(function() {
    castle = new Castle(1);
    dragon = new Dragon();
    spyOn(Math, 'random').and.returnValue(1);
    // dragon.land(castle)
  });

  describe('dragons', function() {
    it('has a dragon when landed a dragon', function() {
      castle.princessCall()
      castle.land(dragon);
      expect(castle.dragons()).toContain(dragon);
    });

    it("does not have a dragon when dragon fly off", function() {
      castle.princessCall()
      castle.land(dragon);
      castle.flyOff(dragon)
      expect(castle.dragons()).toEqual([]);
    });

    it("cannot land when exceeding the capacity", function() {
      castle.princessCall()
      castle.land(dragon);
      castle.princessCall()
      expect(castle.land(dragon)).toEqual('NOO Dragon! not needed today');
    });
  });

  describe('princessCall', function() {
    it('dragon cannot land without princessCall', function() {
      expect(castle.land(dragon)).toEqual('NOO Dragon! not needed today');
    });
  });
});
