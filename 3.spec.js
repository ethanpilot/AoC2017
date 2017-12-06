var expect = require('chai').expect;
var day3 = require('./3.js');
/*global describe it*/

describe('Day 3 - Spiral Memory', function() {

  describe('getRing', function() {
    it('Square 1 in ring 0', function() {
      expect(day3.getRing(1)).to.equal(0);
    });
    it('Square 9 in ring 1', function() {
      expect(day3.getRing(9)).to.equal(1);
    })
    it('Square 12 in ring 2', function() {
      expect(day3.getRing(12)).to.equal(2);
    })
    it('Square 23 in ring 2', function() {
      expect(day3.getRing(23)).to.equal(2);
    })
  })

  describe('getRingStart', function() {
    it('Ring 1 starts at 2', function() {
      expect(day3.getRingStart(1)).to.equal(2);
    })
    it('Ring 2 starts at 10', function() {
      expect(day3.getRingStart(2)).to.equal(10);
    })
    it('Ring 3 starts at 26', function() {
      expect(day3.getRingStart(3)).to.equal(26);
    })
  })

  describe('getFirstCenter', function() {
    it('Ring 1 first center at 2', function() {
      expect(day3.getFirstCenter(1)).to.equal(2);
    })
    it('Ring 2 first center at 11', function() {
      expect(day3.getFirstCenter(2)).to.equal(11);
    })
    it('Ring 3 first center at 28', function() {
      expect(day3.getFirstCenter(3)).to.equal(28);
    })
  })

  describe('getDistance', function() {
    it('Square 1 is distance 0', function() {
      expect(day3.getDistance(1)).to.equal(0);
    })
    it('Square 12 is distance 3', function() {
      expect(day3.getDistance(12)).to.equal(3);
    })
    it('Square 23 is distance 2', function() {
      expect(day3.getDistance(23)).to.equal(2);
    })
    it('Square 1024 is distance 31', function() {
      expect(day3.getDistance(1024)).to.equal(31);
    })
  })

  describe('isCorner', function() {
    it('Square 3 is a corner', function() {
      expect(day3.isCorner(3)).to.equal(true);
    })
    it('Square 5 is a corner', function() {
      expect(day3.isCorner(5)).to.equal(true);
    })
    it('Square 21 is a corner', function() {
      expect(day3.isCorner(21)).to.equal(true);
    })
    it('Square 49 is a corner', function() {
      expect(day3.isCorner(49)).to.equal(true);
    })
    it('Square 4 is not a corner', function() {
      expect(day3.isCorner(4)).to.equal(false);
    })
  })

  describe('getNumber', function() {
    it('Square 10 evaluates to 26', function() {
      expect(day3.getNumber(10)).to.equal(26);
    })
    it('Square 11 evaluates to 54', function() {
      expect(day3.getNumber(11)).to.equal(54);
    })
    it('Square 15 evaluates to 133', function() {
      expect(day3.getNumber(15)).to.equal(133);
    })
    it('Square 13 evaluates to 59', function() {
      expect(day3.getNumber(13)).to.equal(59);
    })
    it('Square 25 evaluates to 931', function() {
      expect(day3.getNumber(25)).to.equal(931);
    })
    it('Square 16 evaluates to 142', function() {
      expect(day3.getNumber(16)).to.equal(142);
    })
  })

  describe('generateSquares', function() {
    it('5x5 square generated numbers properly', function() {
      expect(day3.generateSquares(25)).to.deep.equal([0, 1, 1, 2, 4, 5, 10, 11, 23, 25, 26, 54, 57, 59, 122, 133, 142, 147, 304, 330, 351, 362, 747, 806, 880, 931]);
    })
  })

  describe('seekGreaterNumber', function() {
    it('931 first greater number after 900', function() {
      expect(day3.seekGreaterNumber(900)).to.equal(931);
    })
  })

})