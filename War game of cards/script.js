
console.clear();


var Card = (function() {

  var suitNames = ['spades', 'diamonds', 'clubs', 'hearts'],
    suitCodes = ['\u2660', '\u2666', '\u2663', '\u2665'],
    Card = function(index) {
      this.index = index;
      this.value = (index % 13) + 1;
      this.suit = suitNames[Math.floor(index / 13)];
    };

  Card.prototype = {
    get number() {
      switch (this.value) {
        case 11:
          return 'J';
        case 12:
          return 'Q';
        case 13:
          return 'K';
        case 1:
          return 'A';
        default:
          return this.value;
      }
      return this.value;
    },
    get name() {
      var numberName = (function(n) {
        switch (n) {
          case 'A': return 'Ace';
          case 'K': return 'King';
          case 'Q': return 'Queen';
          case 'J': return 'Jack';
          default: return n;
        }
      })(this.number);
      return numberName + ' of ' + this.suit;
    },
    get suitUnicodeArray() { return suitCodes; },
    get suitNameArray() { return suitNames; }
  };

  return Card;
})();

console.log(new Card(13));


var deck = Array.apply(null, Array(52)).map(function(_, i) { return new Card(i); });


var playerDeck = [], cpuDeck = [],
  drawIndex;


while (deck.length > 0) {


  drawIndex = Math.random() * deck.length;
  playerDeck.push(deck.splice(drawIndex, 1)[0]);


  drawIndex = Math.random() * deck.length;
  cpuDeck.push(deck.splice(drawIndex.cpu, 1)[0]);

}


var drawAndPlay = function(rewards) {
  if (rewards) { console.log('rewards = ', rewards); }


  if (playerDeck.length === 0 || cpuDeck.length === 0) {

    if (playerDeck.length > 0) {
      console.log('Player Won');
    } else {
      console.log('CPU Won');
    }
    return false;
  }

  var playerCard = playerDeck.shift(),
    cpuCard = cpuDeck.shift(),
    rewards = rewards ? rewards : [];


  var playerSection = document.querySelector('section.player'),
    cpuSection = document.querySelector('section.cpu'),
    playerCardDiv = playerSection.querySelector('div.card'),
    cpuCardDiv = cpuSection.querySelector('div.card'),
    playerPoints = playerSection.querySelector('[data-points]'),
    cpuPoints = cpuSection.querySelector('[data-points]');

  Card.prototype.suitNameArray.forEach(function(v, i, a) {
    playerCardDiv.classList.remove(v);
    cpuCardDiv.classList.remove(v);
    return true;
  });

  playerCardDiv.querySelector('span.name').innerHTML = playerCard.number;
  playerCardDiv.classList.add(playerCard.suit);
  playerSection.querySelector('div[data-cards-left]').setAttribute('data-cards-left', playerDeck.length);

  cpuCardDiv.querySelector('span.name').innerHTML = cpuCard.number;
  cpuCardDiv.classList.add(cpuCard.suit);
  cpuSection.querySelector('div[data-cards-left]').setAttribute('data-cards-left', cpuDeck.length);


  if (playerCard.value === cpuCard.value) {
    console.log('tie', playerCard, cpuCard);

    rewards.push(playerCard);
    rewards.push(cpuCard);
    return drawAndPlay(rewards);
  } else if (playerCard.value > cpuCard.value) {

    console.log('Player wins round', playerCard, cpuCard);

    playerPoints.setAttribute('data-points', parseInt(playerPoints.getAttribute('data-points')) + 1)


    playerDeck.splice(playerDeck.length, 0, playerCard, cpuCard);
    if (rewards.length > 0) {
      playerDeck = playerDeck.concat(rewards);
    }

  } else {

    console.log('CPU wins round', playerCard, cpuCard);

    cpuPoints.setAttribute('data-points', parseInt(cpuPoints.getAttribute('data-points')) + 1)


    cpuDeck.splice(cpuDeck.length, 0, cpuCard, playerCard);
    if (rewards.length > 0) {
      cpuDeck = cpuDeck.concat(rewards);
    }

  }

  console.log('Player Cards left = ' + playerDeck.length, 'CPU Cards left = ' + cpuDeck.length);
  return true;
};



window.onload = function() {
  var btn = document.querySelector('button.draw');
  btn.addEventListener('click', function(event) {
    var keepGoing = drawAndPlay();
    if (!keepGoing) {
      alert('Game Over');
      clearInterval(window.intervalID);
    }
  });


};


