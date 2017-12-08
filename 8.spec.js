/*global describe it*/
let expect = require('chai').expect;
let day8 = require('./8');

describe('Day 8  - Registers', () => {
  describe('parseLine', () => {
    let register = {};
    it('register is modified as expected after parsing "b inc 5 if a > 1"', () => {
      day8.parseLine('b inc 5 if a > 1', register);
      expect(register).to.deep.equal({a: 0, b: 0});
    })
    it('register is modified as expected after parsing "a inc 1 if b < 5"', () => {
      day8.parseLine('a inc 1 if b < 5', register);
      expect(register).to.deep.equal({a: 1, b: 0});
    })
  })

  describe('getMaxReg', () => {
    it('returns 1 after parsing example lines', () => {
      let lines = ['b inc 5 if a > 1',
      'a inc 1 if b < 5',
      'c dec -10 if a >= 1',
      'c inc -20 if c == 10'];
      let register = {};
      lines.forEach((line)=>{
        register = day8.parseLine(line, register);
      })
      expect(day8.getMaxReg(register)).to.equal(1);
    })
  })
})