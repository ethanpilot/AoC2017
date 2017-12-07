var expect = require('chai').expect;
var day5 = require('./5')

describe('Day 5 - Trampoline Maze', function() {
  describe('traverse', function() {
    it('[0, 3, 0, 1, -3] escapes in 5 steps', function() {
      expect(day5.traverse([0, 3, 0, 1, -3])).to.equal(5);
    }) 
  })
  describe('traverse with step 2 param', function() {
    it('[0, 3, 0, 1, -3] escapes in 10 steps', function() {
      expect(day5.traverse([0, 3, 0, 1, -3], true)).to.equal(10);
    }) 
  })
})