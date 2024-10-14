// organizationStore.js
import { writable, derived } from 'svelte/store';

// Create a store to manage the progress of a single organization
const correctAnswersBeige = writable(0);
const incorrectAnswersBeige = writable(0);
const totalAnswersBeige = derived(
    [correctAnswersBeige, incorrectAnswersBeige],
    ([$correctAnswersBeige, $incorrectAnswersBeige]) => $correctAnswersBeige + $incorrectAnswersBeige
);

// Function to increment correct answers
const incrementCorrectBeige = () => {
    correctAnswersBeige.update(n => n + 1);
};

// Function to increment incorrect answers
const incrementIncorrectBeige = () => {
    incorrectAnswersBeige.update(n => n + 1);
};

// Function to resetBeige answers
const resetBeige = () => {
    correctAnswersBeige.set(0);
    incorrectAnswersBeige.set(0);
};

const organizationProgress = {
  correctAnswersBeige,
  incorrectAnswersBeige,
  totalAnswersBeige,
  incrementCorrectBeige,
  incrementIncorrectBeige,
  resetBeige
};
// Export the store and functions for usage in components
export default organizationProgress;
