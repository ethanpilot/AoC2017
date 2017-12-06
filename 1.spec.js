var expect = require('chai').expect;
var rCap = require('./1.js').rCap;
var rCap2 = require('./1.js').rCap2;

describe('Day 1 - Reverse Captcha', function() {
	describe('Part One', function() {
		it('returns 3 from 1122', function() {
			expect(rCap('1122')).to.equal(3);
		});

		it('returns 4 from 1111', function() {
			expect(rCap('1111')).to.equal(4);
		});

		it('returns 0 from 1234', function() {
			expect(rCap('1234')).to.equal(0);
		});

		it('returns 9 from 91212129', function() {
			expect(rCap('91212129')).to.equal(9);
		});
	});

	describe('Part Two', function() {
		it('returns 6 from 1212', function() {
			expect(rCap2('1212')).to.equal(6);
		});

		it('returns 0 from 1221', function() {
			expect(rCap2('1221')).to.equal(0);
		});

		it('returns 4 from 123425', function() {
			expect(rCap2('123425')).to.equal(4);
		});

		it('returns 12 from 123123', function() {
			expect(rCap2('123123')).to.equal(12);
		});

		it('returns 4 from 12131415', function() {
			expect(rCap2('12131415')).to.equal(4);
		});
	});
})