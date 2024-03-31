let timer = 0;
const timerStatus = document.getElementById('timer') as HTMLElement;

const setTimer = () => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  let result = '';
  if (minutes < 10) {
    result += '0';
  }
  result += minutes + ':';
  if (seconds < 10) {
    result += '0';
  }
  result += seconds;
  timerStatus.innerHTML = result;
};

export const startTimer = () => {
  setInterval(() => {
    timer += 1;
    setTimer();
  }, 1000);
};
