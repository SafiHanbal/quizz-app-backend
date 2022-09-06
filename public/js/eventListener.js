import { store } from './store';
import { setHighScore } from './fromBackend';
import { removeAnswerContainerListener } from './index';

import {
  updateCurrentScore,
  renderQuestion,
  timer,
  bonusTimer,
  endGame,
} from './helper';

export const answerContainerEventListener = (e) => {
  const question = store.question;
  e.preventDefault();
  if (!e.target.className === 'answer') return;
  const selectedAnswer = e.target.closest('.answer');
  selectedAnswer?.classList.add('answer--selected');
  removeAnswerContainerListener();
  clearInterval(timer);
  clearInterval(bonusTimer);

  setTimeout(() => {
    if (
      selectedAnswer.querySelector('.answer-text').textContent ===
      question.answerCorrect
    ) {
      selectedAnswer.classList.remove('answer--selected');
      selectedAnswer.classList.add('answer--right');
      setTimeout(() => {
        updateCurrentScore();
        store.bonusTimeLeft = 30;
        if (store.questionNo === 10) return endGame();
        renderQuestion('easy');
        selectedAnswer.classList.remove('answer--right');
      }, 1000);
    } else {
      selectedAnswer.classList.remove('answer--selected');
      selectedAnswer.classList.add('answer--wrong');
      setTimeout(() => {
        return endGame();
      }, 1000);
    }
  }, question.waitTime);
};

export const saveFormListener = async (e) => {
  e.preventDefault();
  const data = await setHighScore(
    document.querySelector('.input').value,
    store.score
  );

  document.querySelector('.save').style.backgroundColor = '#b3b3b3';
  document.querySelector('.save').value = 'Saving...';

  if (data.status === 'success') {
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
};
