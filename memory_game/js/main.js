
var cards = ["queen", "queen", "king", "king"];
cards.length;


var cardsInPlay = [ ];
cardsInPlay.push(cards[0]);


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} 
	else {
	console.log("Sorry, try again.");
	}
}


var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);

	if (cardsInPlay.length === 2) {	
	checkForMatch();
	}
}


flipCard(0);


flipCard(2);
checkForMatch();