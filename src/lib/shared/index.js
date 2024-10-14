import Citate from './ui/Citate.svelte';
import P from './ui/P.svelte';
// import Citate from './ui/Citate.svelte';
// import Citate from './ui/Citate.svelte';
// import Citate from './ui/Citate.svelte';
// import Citate from './ui/Citate.svelte';
// import Citate from './ui/Citate.svelte';


// utils
// import socketIoHandler from './utils/socketIoHandler.js';
// import webSocketPluginVite from './utils/webSocketPluginVite.js';


// stores
import {
  rollDice, lives, progress, correctAnswers, incorrectAnswers, answerQuestion,
} from './stores/levelsScore.js';
import {
  resetTimer, timer, startTimer, isTimerRunning,
} from './stores/timer'
import {
 rolesList, randomRole, userRole, getRoleMessage,
} from './stores/roles'
import {
  beigeProgress,
  // blueProgress,
  // greenProgress,
  // orangeProgress,
  // pinkProgress,
  // purpleProgress,
  // redProgress,
  // turquoiseProgress,
  // yellowProgress,

} from './stores/organisations'


// data
import categories from './data/categories';
import {beigeQuotes} from './data/citates';
import footerLinks from './data/footerLinks';
import faq from './data/faq';

export {
    beigeProgress,
  // blueProgress,
  // greenProgress,
  // orangeProgress,
  // pinkProgress,
  // purpleProgress,
  // redProgress,
  // turquoiseProgress,
  // yellowProgress,
  beigeQuotes,
  rolesList,
  faq, 

  Citate, P, rollDice, footerLinks, categories, randomRole, timer, userRole, getRoleMessage, answerQuestion, resetTimer, lives, progress, correctAnswers, incorrectAnswers, startTimer, isTimerRunning,
}

