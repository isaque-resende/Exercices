// Task 1
// Check if the 'Fast Attack' action is possible

// Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:

// const knightIsAwake = true;
// canExecuteFastAttack(knightIsAwake);
// // => false

function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

// Task 2
// Check if the 'Spy' action is possible

// Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false:

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
// // => true

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

// Task 3
// Check if the 'Signal Prisoner' action is possible

// Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false:

// const archerIsAwake = false;
// const prisonerIsAwake = true;
// canSignalPrisoner(archerIsAwake, prisonerIsAwake);
// // => true

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

// Task 4
// Check if the 'Free Prisoner' action is possible

// Implement a function named canFreePrisoner that takes four boolean values. The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake. The last parameter indicates if Annalyn's pet dog is present. The function returns true if the 'Free Prisoner' action is available based on the state of the characters and Annalyn's pet dog presence. Otherwise, it returns false:

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// const petDogIsPresent = false;
// canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
// // => false

function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (!archerIsAwake && petDogIsPresent) || (!knightIsAwake && !archerIsAwake && prisonerIsAwake);
}