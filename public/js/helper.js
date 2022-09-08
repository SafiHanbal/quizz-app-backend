import { store } from './store';
import { getHighScores, getQuestion } from './fromBackend';
import { saveFormListener } from './eventListener';
import {
  nameArr,
  highScoreArr,
  myScore,
  currentQuestionElement,
  questionElement,
  answerElements,
  timerTextElement,
  formContainer,
  saveScorePopup,
  addAnswerContainerListener,
  removeAnswerContainerListener,
} from './index';

export let timer, bonusTimer, difficulty;

export const endGame = async () => {
  let markup;
  if (store.score > store.highScores[4].score) {
    markup = `
      <h2 class="heading-popup">Hurray!</h2>
      <p class="paragraph-popup">You scored ${store.score} points.</p>
      <p class="paragraph-popup">
        Enter your name to showcase your skills.
      </p>
      <form class="save-score-form">
        <input
          class="input"
          type="text"
          name="name"
          id="name"
           maxlength="10"
        />
        <input class="save" type="submit" value="Save" />
      </form>
    `;
    formContainer.innerHTML = markup;
    saveScorePopup.classList.add('save-score-popup--active');

    document
      .querySelector('.save-score-form')
      .addEventListener('submit', saveFormListener);
  } else {
    markup = `
    <h2 class="heading-popup">Congratulations</h2>
    <p class="paragraph-popup">You scored ${store.score} points.</p>
    <p class="paragraph-popup">
    Play better to reach HIGH SCORE.
    </p>
    `;
    formContainer.innerHTML = markup;
    saveScorePopup.classList.add('save-score-popup--active');
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
};

export const renderQuestion = async () => {
  // Getting question
  difficulty = store.difficultyArr[store.questionNo];

  const data = await getQuestion(difficulty, store.excludeQuestions);
  if (data.status !== 'success') return;
  store.question = data.data.question;
  store.question.waitTime = store.waitTime[difficulty];
  store.excludeQuestions.push(store.question._id);

  // Updating question no
  store.questionNo = store.questionNo + 1;

  // Redering Progress
  currentQuestionElement.textContent = store.questionNo;

  // Rendering question
  questionElement.textContent = store.question.question;

  // Rendeing Answers
  answerElements.forEach((answerText, i) => {
    answerText.textContent = store.question.answerOptions[i];
  });

  // Adding Listner to answer container
  addAnswerContainerListener();

  store.timeLeft = store.maxTime[difficulty];

  bonusTimer = setInterval(() => {
    store.bonusTimeLeft = store.bonusTimeLeft - 1;
    if (store.timeLeft === 0) clearInterval(bonusTimer);
  }, 1000);

  if (store.timeLeft === '&infin;') {
    timerTextElement.innerHTML = store.timeLeft;
    timerTextElement.style.fontSize = '4rem';
  } else {
    timerTextElement.textContent = store.timeLeft;

    timer = setInterval(() => {
      store.timeLeft = store.timeLeft - 1;
      if (store.timeLeft === 0) {
        removeAnswerContainerListener();
        clearInterval(timer);
        endGame();
      }
      timerTextElement.textContent = store.timeLeft;
    }, 1000);
  }
};

export const renderHighScores = async () => {
  const highScores = await getHighScores();
  if (highScores.status !== 'success') return;
  store.highScores = highScores.data.highScores;

  store.highScores.forEach((el, i) => {
    nameArr[i].textContent = el.name;
    highScoreArr[i].textContent = el.score;
  });
};

export const updateCurrentScore = () => {
  const answerPointsDirectory = {
    easy: 300,
    medium: 500,
    hard: 700,
    expert: 1000,
  };
  const rightAnswerPoints = answerPointsDirectory[difficulty];
  const bonusPoints = 10 * store.bonusTimeLeft;
  store.score = store.score + rightAnswerPoints + bonusPoints;
  myScore.textContent = store.score;
};
