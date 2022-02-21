// Task 1
// Define the expected oven time in minutes

// Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is 40.

export const EXPECTED_MINUTES_IN_OVEN = 40;

// Task 2
// Calculate the remaining oven time in minutes

// Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.

// remainingMinutesInOven(30);
// // => 10

export function remainingMinutesInOven(actualMinutesInOven){
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
};

// Task 3
// Calculate the preparation time in minutes

// Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

// preparationTimeInMinutes(2);
// // => 4

export function preparationTimeInMinutes(numberOfLayers) {
  return 2 * numberOfLayers;
}

// Task 4
// Calculate the total working time in minutes

// Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

// totalTimeInMinutes(3, 20);
// // => 26

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return 2 * numberOfLayers + actualMinutesInOven;
}