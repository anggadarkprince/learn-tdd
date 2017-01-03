// https://github.com/dwyl/learn-tdd
describe('hooks', function () {

    before(function () {
        //console.log('after suite test');
    });

    after(function () {
        //console.log('before suite test');
    });

    beforeEach(function () {
        //console.log('before every test in every file');
    });

    afterEach(function () {
        //console.log('after every test in every file');
    });

    // test cases
    var multipler = require('../src/js/multipler.js');  // our module
    var assert = require('assert');
    describe('Array', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
                assert.equal(-1, [1, 2, 3].indexOf(4));
            });
        });

        describe('#checkTest()', function () {
            it('should return false when the value is "test"', function () {
                assert.equal(false, 'test' !== 'test');
            });
        });

        describe('#multipler()', function () {
            it('should return 555 when the input is 5', function () {
                assert.equal(555, multipler(5));
            });
        });
    });

    describe('User', function () {
        var User = require('../src/js/user.js');
        var luna = new User('Luna', 'luna12', 'luna@gmail.com');
        var rio = new User('Rio', 'rio33', 'rio@gmail.com');
        var alex = new User('Alex', 'alex57', 'alex@gmail.com');

        describe('#save()', function () {
            it('should object structure complete', function () {
                assert.equal(typeof luna, 'object');
                assert.equal(typeof rio, 'object');
                assert.equal(typeof rio, 'object');
            });

            it('should object structure complete', function () {
                assert.equal(typeof luna.get, 'function');
                assert.equal(typeof luna.find, 'function');
                assert.equal(typeof luna.save, 'function');
                assert.equal(typeof luna.update, 'function');
                assert.equal(typeof luna.delete, 'function');
            });
        });

        describe('#save()', function () {
            it('should save without error', function () {
                assert.equal(true, luna.save());
                assert.ok(rio.save());
                assert.ok(alex.save());
            });
        });

        describe('#get(luna12)', function () {
            it('should return object without username input', function () {
                var alexData = luna.get();
                assert.equal(typeof alexData, 'object');
            });
            it('should get name Luna', function () {
                var lunaData = luna.get('luna12');
                assert.equal(typeof lunaData, 'object');
                assert.equal('Luna', lunaData.name);
            });
            it('should get null when user not found', function () {
                assert.equal(null, luna.get('nonuser'));
            });
        });

        describe('#find(luna12)', function () {
            it('should get index instead of -1 (not found)', function () {
                assert.equal(0, luna.find('luna12'));
            });
            it('should get -1 for not exist data', function () {
                assert.equal(-1, luna.find('nonuser'));
            });
        });

        describe('#update()', function () {
            it('should update name luna with rina', function () {
                luna.name = 'Rina';
                luna.email = 'rina@gmail.com';
                assert.ok(luna.update());
                assert.equal('Rina', luna.get('luna12').name);
            });

            it('should return false when update not exist user', function () {
                luna.username = 'nonuser';
                luna.name = 'Rina';
                luna.email = 'rina@gmail.com';
                assert.equal(false, luna.update());
            });
        });

        describe('#delete()', function () {
            it('should delete a user', function () {
                assert.ok(rio.delete());
                assert.equal(null, rio.get('rio33'));
            });

            it('should return false when delete not exist user', function () {
                rio.username = 'nonuser';
                assert.equal(false, rio.delete());
            });
        });
    });
});



