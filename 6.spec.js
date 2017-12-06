/*global describe it*/
let expect = require('chai').expect;

let day6 = require('./6');

describe('Day 6 - Memory Reallocation', function() {
  describe('redistribute', function() {
    it('redistrubutes [0 2 7 0] to [2 4 1 2]', function() {
      expect(day6.redistribute([0, 2, 7, 0])).to.deep.equal([2, 4, 1, 2])
    })
    it('redistributes [2 4 1 2] to [3 1 2 3]', function() {
      expect(day6.redistribute([2, 4, 1, 2])).to.deep.equal([3, 1, 2, 3])
    })
    it('redistributes [3 1 2 3] to [0 2 3 4]', function() {
      expect(day6.redistribute([3, 1, 2, 3])).to.deep.equal([0, 2, 3, 4])
    })
    it('redistributes [0 2 3 4] to [1 3 4 1]', function() {
      expect(day6.redistribute([0, 2, 3, 4])).to.deep.equal([1, 3, 4, 1])
    })
  })

  describe('redistribute', function() {
    it('[0 2 7 0] yields 5', function() {
      expect(day6.redistCycleCount([0, 2, 7, 0])).to.equal(5);
    })
  })

  describe('redistribute part 2', function(){
    it('[0 2 7 0] yields 4', function() {
      expect(day6.redistCycleCount([0, 2, 7, 0], true)).to.equal(4);
    })
  })
})