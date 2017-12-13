/*global describe it*/
let expect = require('chai').expect;
let day13 = require('./13');

let testData = ['0: 3',
'1: 2',
'4: 4',
'6: 4']

describe('Day 13 - Packet Scanners', ()=>{
  describe('buildFirewall', ()=>{
    it('builds test data properly', ()=>{
      expect(day13.buildFirewall(testData)).to.deep.equal([
        {depth: 0, range: 3, curPos: 0, direction: 1},
        {depth: 1, range: 2, curPos: 0, direction: 1},
        {depth: 2, range: 0, curPos: 0, direction: 1},
        {depth: 3, range: 0, curPos: 0, direction: 1},
        {depth: 4, range: 4, curPos: 0, direction: 1},
        {depth: 5, range: 0, curPos: 0, direction: 1},
        {depth: 6, range: 4, curPos: 0, direction: 1}
      ])
    })
  })
  describe('incrementFirewall', ()=>{
    it('increments properly', ()=>{
      expect(day13.incrementFirewall(day13.buildFirewall(testData))).to.deep.equal([
        {depth: 0, range: 3, curPos: 1, direction: 1},
        {depth: 1, range: 2, curPos: 1, direction: -1},
        {depth: 2, range: 0, curPos: 0, direction: 1},
        {depth: 3, range: 0, curPos: 0, direction: 1},
        {depth: 4, range: 4, curPos: 1, direction: 1},
        {depth: 5, range: 0, curPos: 0, direction: 1},
        {depth: 6, range: 4, curPos: 1, direction: 1}
      ])
    })
  })
  describe('traverseFirewall', ()=>{
    it('returns severity of 24 for sample data', ()=>{
      expect(day13.traverseFirewall(day13.buildFirewall(testData))).to.equal(24)
    })
  })
  describe('findSafeDelay', ()=>{
    it('returns safe delay of 10 for sample data', ()=>{
      expect(day13.findSafeDelay(day13.buildFirewall(testData))).to.equal(10)
    })
  })
})