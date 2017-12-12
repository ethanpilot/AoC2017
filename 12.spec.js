/*global describe it*/
let expect = require('chai').expect;
let day12 = require('./12');

let sampleInput = ['0 <-> 2',
'1 <-> 1',
'2 <-> 0, 3, 4',
'3 <-> 2, 4',
'4 <-> 2, 3, 6',
'5 <-> 6',
'6 <-> 4, 5'];

describe('Day 12 - Digital Plumber', ()=>{
  describe('initializeTree', ()=>{
    it('builds sample data as expected', ()=>{
      expect(day12.initializeTree(sampleInput)).to.deep.equal({
        '0' : ['2'],
        '1' : ['1'],
        '2' : ['0', '3', '4'],
        '3' : ['2', '4'],
        '4' : ['2', '3', '6'],
        '5' : ['6'],
        '6' : ['4', '5']
      })
    })
  })
  describe('exploreTree', ()=>{
    it('returns an array of size 6 for group 0 in example input', ()=>{
      expect(day12.exploreTree(day12.initializeTree(sampleInput), '0').length).to.equal(6);
    })
  })
  describe('getUniqHashes', ()=>{
    it('returns array of size 2 for group 0 in example input', ()=>{
      expect(day12.getUniqueHashes(day12.exploreFullTree(day12.initializeTree(sampleInput)).hash).length).to.equal(2)
    })
  })
})