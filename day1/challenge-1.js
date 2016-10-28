/*
    Coder Factory Day 1, Challenge 1 Sample Code
      > Populate a JavaScript Array with each of the cards found in a standard deck.
      > For example, “3 of Hearts” and “King of Spades”
*/

// Types of Card
var CardTypes = ["Hearts", "Diamonds", "Spades", "Clubs"];

// Numbers of Cards
var CardNumbers = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];

// My array of Cards
var Cards = [];

// For each type of CardType
for( var type in CardTypes ) {

  // For each number of CardNumbers
  for( var number in CardNumbers ) {

    // Concatinate each Type and Number into a Human Readable String
    // Push this item into the Cards array
    Cards.push(CardNumbers[number] + ' of ' + CardTypes[type]);

  }

}

console.log("All cards in the Cards Array: ", Cards);
console.log("Total number of Cards: " + Cards.length);
