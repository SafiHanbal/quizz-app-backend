export const getQuestion = async (difficulty, excludeQuestion = []) => {
  try {
    if (!difficulty) throw new Error('Provide difficulty of question');
    let url = `/api/v1/question/${difficulty}?exclude=${excludeQuestion.join(
      ','
    )}`;
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
};

export const getHighScores = async () => {
  try {
    const url = `/api/v1/high-score`;
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
};

export const setHighScore = async (name, score) => {
  try {
    const url = `/api/v1/high-score`;
    const res = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        score,
      }),
    });
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
};
