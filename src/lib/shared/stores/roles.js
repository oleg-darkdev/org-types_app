import { writable } from 'svelte/store';
import { beigeQuotes } from '$lib/shared';



// Определение ролей с ID
const rolesList = [
    { id: 1, name: 'верификатор', message: 'Вы - верификатор! Проверяйте ответы.' },
    { id: 2, name: 'секундомер', message: 'Вы - секундомер! Держите время под контролем.' },
    { id: 3, name: 'справочник', message: 'Вы - справочник! Помогайте другим.' },
    { id: 4, name: 'синий', message: 'Вы - синий! Оставайтесь спокойными.' },
    { id: 5, name: 'оранжевый', message: 'Вы - оранжевый! Будьте энергичными!' },
    { id: 6, name: 'бежевый', message: 'Вы - бежевый! Нежный и мудрый выбор.' }
];

// Функция для случайного выбора роли на основе броска кубика (D6)
const randomRole = () => rolesList[Math.floor(Math.random() * 6)];
const userRole = writable(randomRole()); // Случайная роль пользователя

// Функция для получения сообщения для текущей роли
const getRoleMessage = () => {
    let message = '';
    userRole.subscribe(role => {
        const currentRole = rolesList.find(r => r.id === role.id);
        if (currentRole) {
            message = currentRole.message;
        }
    });
    return message;
};

// id

const getRandomBeigeQuote = () => {
  const currentRole = rolesList.find(role => role.id === 6);

  // Select a random quote from the beige quotes
  const randomIndex = Math.floor(Math.random() * beigeQuotes.length);
  currentRole.message = beigeQuotes[randomIndex];

};




export {rolesList,  randomRole, getRandomBeigeQuote, userRole, getRoleMessage};
