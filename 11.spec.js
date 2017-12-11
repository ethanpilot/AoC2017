/*global describe it*/
let expect = require('chai').expect;
let day11 = require('./11');

describe('Day 11 - Hex Ed', ()=>{
  describe('buildDirectionObj', ()=>{
    it('builds object from "ne,ne,ne" properly', ()=>{
      expect(day11.buildDirectionObj('ne,ne,ne')).to.deep.equal({ne:3,nw:0,n:0,se:0,sw:0,s:0})
    })
    it('builds object from "ne,ne,sw,sw" properly', ()=>{
      expect(day11.buildDirectionObj('ne,ne,sw,sw')).to.deep.equal({ne:2,nw:0,n:0,se:0,sw:2,s:0})
    })
  })
  describe('simplifyDirectionObj', ()=>{
    it('simplifies "ne,ne,sw,sw" to all 0', ()=>{
      expect(day11.simplifyDirectionObj({ne:2,nw:0,n:0,se:0,sw:2,s:0})).to.deep.equal({ne:0,nw:0,n:0,se:0,sw:0,s:0})
    })
    it('simplifies "ne,ne,s,s" to "se,se"', ()=>{
      expect(day11.simplifyDirectionObj({ne:2,nw:0,n:0,se:0,sw:0,s:2})).to.deep.equal({ne:0,nw:0,n:0,se:2,sw:0,s:0})
    })
  })
})