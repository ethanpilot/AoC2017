var expect = require('chai').expect;
var day4 = require('./4.js');

describe('Day 4 - Pass Phrases', function() {
  describe('hasDupes', function() {
    it('aa bb cc dd ee returns false', function() {
      expect(day4.hasDupes('aa bb cc dd ee')).to.equal(false);
    })
    it('aa bb cc dd aa returns true', function() {
      expect(day4.hasDupes('aa bb cc dd aa')).to.equal(true);
    })
    it('aa bb cc dd aaa returns false', function() {
      expect(day4.hasDupes('aa bb cc dd aaa')).to.equal(false);
    })
  }),

  describe('sortUniqLetters', function() {
    it('hello -> ehlo', function() {
      expect(day4.sortLetters('hello')).to.equal('ehllo');
    })
  })

  describe('hasAnagram', function() {
    it('"hello olleh" returns true', function() {
      expect(day4.hasAnagram('hello olleh')).to.equal(true);
    })
  })
})