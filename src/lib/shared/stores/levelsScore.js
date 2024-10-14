import { writable, derived } from 'svelte/store';
import { randomRole, userRole, getRandomBeigeQuote} from './roles'
import { resetTimer, startTimer, isTimerRunning } from './timer';

// Инициализация хранилищ для состояния
export const correctAnswers = writable(0);      // Количество правильных ответов
export const incorrectAnswers = writable(0);    // Количество неправильных ответов

export const totalQuestions = writable(10);     // Общее количество вопросов

export const lives = writable(3);               // Оставшиеся жизни

// Обновление хранилища жизней и ответов на основе правильности ответа
export const answerQuestion = (isCorrect) => {
    if (isCorrect) {
        correctAnswers.update(n => n + 1);
        lives.update(n => n + 1);

    } else {
        incorrectAnswers.update(n => n + 1);
        lives.update(n => n - 1);
  }
  // сюда таймер
  resetTimer();
};

// Функция для сброса всех данных
export const reset = () => {
    correctAnswers.set(0);
    incorrectAnswers.set(0);
    lives.set(3);
    totalQuestions.set(10);
    userRole.set(randomRole()); // Смена роли при сбросе
    resetTimer();
};


// Функция для броска кубика (смены роли)
export const rollDice = () => {
  userRole.set(randomRole()); // Пересменка роли при каждом броске кубика
  getRandomBeigeQuote();
  
  // сюда таймер
  // startTimer();
};




export const selectedOrg = writable("beige");

export const currentProgress = derived(selectedOrg, ($selectedOrg) => {
  switch ($selectedOrg) {
    case "beige":
      return beigeProgress;
    case "blue":
      return blueProgress;
    case "green":
      return greenProgress;
    case "orange":
      return orangeProgress;
    case "pink":
      return pinkProgress;
    case "purple":
      return purpleProgress;
    case "red":
      return redProgress;
    case "turquoise":
      return turquoiseProgress;
    case "yellow":
      return yellowProgress;
    default:
      return 0; // Для обработки некорректного выбора
  }
});

// Хранилища прогресса для каждой организации
export const beigeProgress = writable(0);
export const blueProgress = writable(0);
export const greenProgress = writable(0);
export const orangeProgress = writable(0);
export const pinkProgress = writable(0);
export const purpleProgress = writable(0);
export const redProgress = writable(0);
export const turquoiseProgress = writable(0);
export const yellowProgress = writable(0);


// Хранилище для текущего индекса вопроса и выбранной организации
export const orgCurrentQuestionIndex = writable(0);



// Хранилище для общего прогресса
export const progress = derived(
  [correctAnswers, incorrectAnswers, totalQuestions],
  ([$correctAnswers, $incorrectAnswers, $totalQuestions]) => {
    const answered = $correctAnswers + $incorrectAnswers;
    return Math.min((answered / $totalQuestions) * 100, 100).toFixed(2);
  }
);

// Хранилище для количества оставшихся вопросов
export const remainingQuestions = derived(
  [correctAnswers, incorrectAnswers, totalQuestions],
  ([$correctAnswers, $incorrectAnswers, $totalQuestions]) => {
    return $totalQuestions - ($correctAnswers + $incorrectAnswers);
  }
);
