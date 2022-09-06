import { answerContainerEventListener } from './eventListener';
import { renderQuestion, renderHighScores } from './helper';

const answerContainer = document.querySelector('.answer-container');
const infoIcon = document.querySelector('.rules');
const closeIcon = document.querySelector('.close');
const infoPopup = document.querySelector('.info-popup');
const restart = document.querySelector('.restart');

export const questionElement = document.querySelector('.question');
export const answerElements = document.querySelectorAll('.answer-text');
export const timerTextElement = document.querySelector('.timer-text');
export const myScore = document.querySelector('.my-score');
export const nameArr = document.querySelectorAll('.name');
export const highScoreArr = document.querySelectorAll('.score');
export const input = document.querySelector('.input');
export const form = document.querySelector('.save-score-form');
export const formContainer = document.querySelector(
  '.save-score-form-container'
);
export const saveScorePopup = document.querySelector('.save-score-popup');
export const currentQuestionElement =
  document.querySelector('.current-question');

infoIcon.addEventListener('click', () => {
  infoPopup.classList.add('info-popup--active');
});

closeIcon.addEventListener('click', () => {
  infoPopup.classList.remove('info-popup--active');
});

restart.addEventListener('click', () => {
  location.reload();
});

export const removeAnswerContainerListener = () =>
  answerContainer.removeEventListener('click', answerContainerEventListener);

export const addAnswerContainerListener = () =>
  answerContainer.addEventListener('click', answerContainerEventListener);

renderQuestion();
renderHighScores();
