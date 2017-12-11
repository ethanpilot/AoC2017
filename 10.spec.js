/*global describe it*/
let expect = require('chai').expect;
let day10 = require('./10');
describe('Day 10 - Knot Hash', ()=>{
  describe('hashArr', ()=>{
    it('0,1,2,3,4 starting at pos 0 and length 3 hashes to 2,1,0,3,4', ()=>{
      expect(day10.hashArr(Array.from(Array(5).keys()), 0, 3)).to.deep.equal([2,1,0,3,4])
    })
    it('2,1,0,3,4 starting at pos 3 and length 4 hashes to 4,3,0,1,2', ()=>{
      expect(day10.hashArr([2,1,0,3,4], 3, 4)).to.deep.equal([4,3,0,1,2])
    })
    it('4,3,0,1,2 starting at pos 1 and length 5 hashes to 3,4,2,1,0', ()=>{
      expect(day10.hashArr([4,3,0,1,2], 1, 5)).to.deep.equal([3,4,2,1,0])
    })
  })

  describe('hashSequentially', ()=>{
    it('0,1,2,3,4 with input lengths of 3,4,1,5 hashes to 3 4 2 1 0', ()=>{
      expect(day10.hashSequentially(Array.from(Array(5).keys()),[3,4,1,5]).result).to.deep.equal([3,4,2,1,0])
    })
  })

  describe('hashSequentiallyAndCheck', ()=>{
    it('0,1,2,3,4 with input lengths of 3,4,1,5 hash checks to 12', ()=>{
      expect(day10.hashSequentiallyAndCheck(Array.from(Array(5).keys()),[3,4,1,5])).to.equal(12)
    })
  })

  describe('fullHash', ()=>{
    it('empty string hashes as expected', ()=>{
      expect(day10.fullHash('')).to.equal('a2582a3a0e66e6e86e3812dcb672a272');
    })
    it('"AoC 2017" hashes as expected', ()=>{
      expect(day10.fullHash('AoC 2017')).to.equal('33efeb34ea91902bb2f59c9920caa6cd');
    })
    it('"1,2,3" hashes as expected', ()=>{
      expect(day10.fullHash('1,2,3')).to.equal('3efbe78a8d82f29979031a4aa0b16a9d');
    })
    it('"1,2,4" hashes as expected', ()=>{
      expect(day10.fullHash('1,2,4')).to.equal('63960835bcdc130f0b66d7ff4f6a5a8e');
    })
  })
})