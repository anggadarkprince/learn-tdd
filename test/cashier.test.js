// test coverage `istanbul cover _mocha 'test/**/cashier.js' -R spec`
var assert = require('assert'); // core module
var Cashier = require('../src/js/cashier.js');

describe('Cash Register', function () {
    describe('Module Cashier', function () {
        it('should have a getChange Method', function () {
            assert.equal(typeof Cashier, 'object');
            assert.equal(typeof Cashier.getChange, 'function');
        });

        it('getChange(210, 300) should equal [50,20,20]', function () {
            assert.deepEqual(Cashier.getChange(210, 300), [50, 20, 20]);
        });

        it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function () {
            assert.deepEqual(Cashier.getChange(1487, 10000), [5000, 2000, 1000, 500, 10, 2, 1]);
        });
    });
});