// call code coverage instanbul `istanbul cover test/vm.test.js`
// call code coverage qunit node `test/vm.test.js`
// call code coverage blanket via browser `http://localhost:63342/js-browserify/src/vm.html?coverage`

/* The code block below ONLY Applies to Node.js - This Demonstrates
 re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
    var QUnit = require('qunitjs'); // require QUnit node.js module
    // alias the QUnit.test method so we don't have to change all our tests
    require('qunit-tap')(QUnit, console.log); // use console.log for test output
    var getChange = require('../src/js/vm.js'); // load our getChange method
}

QUnit.test('getChange(1, 1) should equal [] - an empty array', function (assert) {
    var result = getChange(1, 1); //no change/coins just an empty array
    var expected = [];
    assert.deepEqual(result, expected);
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/

QUnit.test('getChange(215, 300) should return [50, 20, 10, 5]', function (assert) {
    var result = getChange(215, 300); // expect an array containing [50,20,10,5]
    var expected = [50, 20, 10, 5];
    assert.deepEqual(result, expected);
});

QUnit.test('getChange(486, 600) should equal [100, 10, 2, 2]', function (assert) {
    var result = getChange(486, 600);
    var expected = [100, 10, 2, 2];
    assert.equal(result.length, expected.length);
    assert.deepEqual(result, expected);
});

QUnit.test('getChange(99, 100) should return [50, 20, 20, 5, 2]', function (assert) {
    var result = getChange(2, 100); // expect an array containing [50,20,10,5]
    var expected = [50, 20, 20, 5, 2];
    assert.deepEqual(result, expected);
});

QUnit.test('getChange(1300, 1337) should return [20, 10, 5, 2]', function (assert) {
    var result = getChange(1300, 1337); // expect an array containing [50,20,10,5]
    var expected = [20, 10, 5, 2];
    assert.deepEqual(result, expected);
});

QUnit.test('getChange(5, 500) should equal []', function (assert) {
    var result = getChange(500, 500);
    var expected = [];
    assert.equal(typeof result, 'object');
    assert.equal(result.length, 0);
    assert.deepEqual(result, expected);
});

QUnit.test('getChange(600, 500) should equal -1', function (assert) {
    var result = getChange(500, 5);
    var expected = -1;
    assert.equal(typeof result, 'number');
    assert.equal(result, expected);
});

/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    QUnit.load();
} // run the tests