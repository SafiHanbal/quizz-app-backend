export const store = {
  question: {},
  highScores: [],
  timeLeft: 30,
  bonusTimeLeft: 30,
  maxTime: {
    easy: 30,
    medium: 45,
    hard: '&infin;',
    expert: '&infin;',
  },
  waitTime: {
    easy: 0,
    medium: 500,
    hard: 1000,
    expert: 1500,
  },
  questionNo: 0,
  excludeQuestions: [],
  score: 0,
  difficultyArr: [
    'easy',
    'easy',
    'easy',
    'medium',
    'medium',
    'medium',
    'hard',
    'hard',
    'hard',
    'expert',
  ],
};
