const assert = require('assert');
const hello = require('./src/hello');
assert.strictEqual(hello('Codex'), 'Hello, Codex!');
console.log('All tests passed!');
