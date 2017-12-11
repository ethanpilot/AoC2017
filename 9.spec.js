/*global describe it*/
let expect = require('chai').expect;
let day9 = require('./9');

describe('Day 9 - Stream processing', ()=>{
  describe('buildGarbage', ()=>{
    it('builds <> as one piece', ()=>{
      expect(day9.buildGarbage(day9.splitStreamString('<>')).result).to.equal('<>');
    })
    it('builds <!!!>> as one piece', ()=>{
      expect(day9.buildGarbage(day9.splitStreamString('<!!!>>')).result).to.equal('<!!!>>');
    })
    it('builds <{o"i!a,<{i<a> as one piece', ()=>{
      expect(day9.buildGarbage(day9.splitStreamString('<{o"i!a,<{i<a>')).result).to.equal('<{o"i!a,<{i<a>');
    })
    it('gives 0 canceled chars from <>', ()=>{
      expect(day9.buildGarbage(day9.splitStreamString('<>')).uncanceledCount).to.equal(0);
    })
    it('gives 17 canceled chars from <random characters>', ()=>{
      expect(day9.buildGarbage(day9.splitStreamString('<random characters>')).uncanceledCount).to.equal(17);
    })
    it('gives 10 canceled chars from <{o"i!a,<{i<a>', ()=>{
      expect(day9.buildGarbage(day9.splitStreamString("<{o\"i!a,<{i<a>")).uncanceledCount).to.equal(10);
    })
  })
  describe('buildStreamArr', ()=>{
    it('builds {{{}}} as expected', ()=>{
      expect(day9.buildStreamArr(day9.splitStreamString('{{{}}}')).result).to.deep.equal([[[]]]);
    })
    it('builds {{},{}} as expected', ()=>{
      expect(day9.buildStreamArr(day9.splitStreamString('{{},{}}')).result).to.deep.equal([[],[]])
    })
    it('builds {{{},{},{{}}}} as expected', ()=>{
      expect(day9.buildStreamArr(day9.splitStreamString('{{{},{},{{}}}}')).result).to.deep.equal([[[],[],[[]]]])
    })
    it('builds {<a>,<a>,<a>,<a>} as expected', ()=>{
      expect(day9.buildStreamArr(day9.splitStreamString('{<a>,<a>,<a>,<a>}')).result).to.deep.equal(['<a>','<a>','<a>','<a>'])
    })
    it('builds {{<!>},{<!>},{<!>},{<a>}} as expected', ()=>{
      expect(day9.buildStreamArr(day9.splitStreamString('{{<!>},{<!>},{<!>},{<a>}}')).result).to.deep.equal([['<!>},{<!>},{<!>},{<a>']])
    })
    it('gives 10 canceled chars from <{o"i!a,<{i<a>', ()=>{
      expect(day9.buildStreamArr(day9.splitStreamString('{{<{o"i!a,<{i<a>},{}}')).uncanceledCount).to.equal(10);
    })
  })

  describe('scoreStream', ()=>{
    it('scores {} to 1', ()=>{
      expect(day9.scoreFromString('{}')).to.equal(1);
    })
    it('scores {{{}}} to 6', ()=>{
      expect(day9.scoreFromString('{{{}}}')).to.equal(6);
    })
    it('scores {{{},{},{{}}}} to 16', ()=>{
      expect(day9.scoreFromString('{{{},{},{{}}}}')).to.equal(16);
    })
    it('scores {<a>,<a>,<a>,<a>} to 1', ()=>{
      expect(day9.scoreFromString('{<a>,<a>,<a>,<a>}')).to.equal(1);
    })
  })
})