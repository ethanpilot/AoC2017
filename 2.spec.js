var expect = require('chai').expect;
var sheetHash = require('./2.js');
const testInput = '5,1,9,5;7,5,3;2,4,6,8';
const testInput2 = '5,9,2,8;9,4,7,3;3,8,6,5';

describe('Day 2 - Sheet Hash', function(){
	describe('sheetParse', function() {
		it('sheet parses as expected', function(){
			let referenceSheet = [[5,1,9,5],[7,5,3],[2,4,6,8]];
			expect(sheetHash.parseSheet(testInput)).to.deep.equal(referenceSheet);
		})
	})
	describe('rowHash', function() {
		it('row 1 hashes to 8', function(){
			expect(sheetHash.rowHash([5,1,9,5])).to.equal(8);
		})
	})
	describe('sheetHash', function() {
		it('example input returns 18', function(){
			expect(sheetHash.sheetHash(testInput)).to.equal(18);
		})
	})
	describe('rowHash2', function() {
		it('[5, 9, 2, 8] hashes to 4', function() {
			expect(sheetHash.rowHash2([5,9,2,8])).to.equal(4);
		})
		it('[9, 4, 7, 3] hashes to 3', function() {
			expect(sheetHash.rowHash2([9,4,7,3])).to.equal(3);
		})
		it('[3, 8, 6, 5] hashes to 2', function() {
			expect(sheetHash.rowHash2([3,8,6,5])).to.equal(2);
		})
	})
	describe('sheetHash2', function() {
		it('example input returns 9', function() {
			expect(sheetHash.sheetHash2(testInput2)).to.equal(9);
		})
	})
})