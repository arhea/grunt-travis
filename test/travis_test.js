var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['travis'] = {
  setUp: function(done) {
    done();
  },
  'helper': function(test) {
    test.expect(2);
    test.equal(grunt.helper('travisBuildCommand'), 'travis-lint', 'Should return default command');
    test.equal(grunt.helper('travisBuildCommand','path/to/file/.travis.yml'), 'travis-lint path/to/file/.travis.yml', 'Should return command with path/to/file/.travis.yml');
    test.done();
  }
};
