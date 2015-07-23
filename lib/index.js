var _ = require('lodash');

var Suits = ['D', 'C', 'H', 'S'];

function LiteratureDeck(players) {
  if (!players) throw new Error('Must provide number of players');
  if (players % 2) throw new Error('Must be an even number of players.');

  var Deck = [];

  for (var i = Suits.length - 1; i >= 0; i--) {
    for (var j = 14; j > 2; j--) {
      Deck.push({
        suit: Suits[i],
        rank: j,
        card: Suits[i] + j,
        set: (j < 9) ? 'minor' : 'major',
        toString: function () {
          return this.card;
        }
      });
    };
  };

  return _.shuffle(Deck);
}

module.exports = LiteratureDeck;
