import { writable } from 'svelte/store';

export const timer = writable(0);               // Таймер для отслеживания времени раунда
export const isTimerRunning = writable(false);  // Статус таймера

export const startTimer = (timer, isTimerRunning) => {
    isTimerRunning.set(true);

    const interval = setInterval(() => {
        timer.update(n => n + 1);
    }, 1000);

    isTimerRunning.subscribe(value => {
        if (!value) {
            clearInterval(interval);
        }
    });
};

// Функция для сброса таймера
export const resetTimer = () => {
    timer.set(0);
    isTimerRunning.set(false);
};



