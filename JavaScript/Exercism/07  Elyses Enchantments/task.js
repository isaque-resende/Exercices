// Task 1
// Retrieve a card from a stack

// To pick a card, return the card at index position from the given stack.

// const position = 2;
// getItem([1, 2, 4, 1], position);
// // => 4

function getItem(cards, position) {
  return cards[position];
}

// Task 2
// Exchange a card in the stack

// Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.

// const position = 2;
// const replacementCard = 6;
// setItem([1, 2, 4, 1], position, replacementCard);
// // => [1, 2, 6, 1]

function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
    return cards;
}

// Task 3
// Insert a card at the top of the stack

// Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.

// const newCard = 8;
// insertItemAtTop([5, 9, 7, 1], newCard);
// // => [5, 9, 7, 1, 8]

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;  
}

// Task 4
// Remove a card from the stack

// Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.

// const position = 2;
// removeItem([3, 2, 6, 4, 8], position);
// // => [3, 2, 4, 8]

function removeItem(cards, position) {
  cards.splice(position, 1);
    return cards;
}

// Task 5
// Remove the top card from the stack

// Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.

// removeItemFromTop([3, 2, 6, 4, 8]);
// // => [3, 2, 6, 4]

function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

// Task 6
// Insert a card at the bottom of the stack

// Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.

// const newCard = 8;
// insertItemAtBottom([5, 9, 7, 1], newCard);
// // => [8, 5, 9, 7, 1]

function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards
}

// Task 7
// Remove a card from the bottom of the stack

// Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.

// removeItemAtBottom([8, 5, 9, 7, 1]);
// // => [5, 9, 7, 1]

function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

// Task 8
// Check the size of the stack

// Check whether the size of the stack is equal to stackSize or not.

// const stackSize = 4;
// checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// // => false

function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}