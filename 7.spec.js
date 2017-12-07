/*global describe it*/
let expect = require('chai').expect;
let day7 = require('./7');

let testList = ['pbga (66)',
'xhth (57)',
'ebii (61)',
'havc (66)',
'ktlj (57)',
'fwft (72) -> ktlj, cntj, xhth',
'qoyq (66)',
'padx (45) -> pbga, havc, qoyq',
'tknk (41) -> ugml, padx, fwft',
'jptl (61)',
'ugml (68) -> gyxo, ebii, jptl',
'gyxo (61)',
'cntj (57)']

describe('Day 7 - Recursive Circus', () => {

  describe('parseLine', () => {
    it('"yffumkx (9) -> jakfuqo, ouxsgm, keily, pshyy" splits correctly', () => {
      expect(day7.parseLine('yffumkx (9) -> jakfuqo, ouxsgm, keily, pshyy')).to.deep.equal(['yffumkx', '9', 'jakfuqo', 'ouxsgm', 'keily', 'pshyy'])
    })
    it('"fyvjfxi (58)" splits correctly', () => {
      expect(day7.parseLine('fyvjfxi (58)')).to.deep.equal(['fyvjfxi', '58'])
    })
  })

  describe('buildNode', () => {
    it('"yffumkx (9) -> jakfuqo, ouxsgm, keily, pshyy" builds into node', () => {
      expect(day7.buildNode('yffumkx (9) -> jakfuqo, ouxsgm, keily, pshyy')).to.deep.equal({name : 'yffumkx', weight : 9, children : ['jakfuqo', 'ouxsgm', 'keily', 'pshyy']})
    })
    it('"fyvjfxi (58)" builds into node', () => {
      expect(day7.buildNode('fyvjfxi (58)')).to.deep.equal({name : 'fyvjfxi', weight : 58, children : []})
    })
  })

  describe('findBottomFromTextList', () => {
    it('finds tknk as bottom of test list', () => {
      expect(day7.findBottomFromTextList(testList)).to.equal('tknk');
    })
  })
})