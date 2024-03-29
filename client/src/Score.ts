let score = 0;
const scoreStatus = document.getElementById('score') as HTMLElement;

export const updateUserScore = () => {
  // every successful match would give the user 100 points
  score += 100;
  scoreStatus.innerHTML = score.toString();
};

export const getScore = () => score;