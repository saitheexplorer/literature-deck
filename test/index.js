var assert = require('assert');

var LiteratureDeck = require('../lib');

assert.throws(LiteratureDeck, 'Must provide number of players.');
assert.throws(function () {
  LiteratureDeck(3);
}, 'Must be even number of players.');

assert.ok(function () {
  LiteratureDeck(4);
  LiteratureDeck(6);
  LiteratureDeck(8);
  LiteratureDeck(10);
});

