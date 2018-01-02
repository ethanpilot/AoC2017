/*global describe it*/
let expect = require('chai').expect;
let day14 = require('./14');

describe('Day 14 - Disk Defragmentation', ()=>{
  describe('countHashGrid', ()=>{
    it('Returns 8108 for input flqrgnkx', ()=>{
      expect(day14.countHashGrid(day14.buildHashGrid('flqrgnkx'))).to.equal(8108);
    })
  })
  describe('getRegions', ()=>{
    it('returns 1242 for flqrgnkx', ()=>{
      expect(day14.getRegions(day14.buildHashGrid('flqrgnkx'))).to.equal(1242);
    })
  })
})