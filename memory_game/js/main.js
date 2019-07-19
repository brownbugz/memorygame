
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},

{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},

{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},

{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

cards.length;

var cardsInPlay = [ ];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	message = "You found a match!";
	} 
	else {
	message = "Sorry, try again.";
	}
	console.log(message);
	alert(message);
}

var flipCard = function(cardId) {
	chosen_card = cards[cardId]
	console.log("User flipped " + chosen_card.rank);
	console.log(chosen_card.cardImage);
	console.log(chosen_card.suit);
	cardsInPlay.push(chosen_card.rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0); 

flipCard(2);
