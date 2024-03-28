export enum GameMode {
  '6x1' = 'Test',
  '6x6' = 'Easy',
  '8x6' = 'Regular',
  '10x6' = 'Hard',
}

export const getGameModeColumns = (option: string) => {
  switch (option) {
    case GameMode["6x1"]:
    case GameMode["6x6"]:
      return 6;
    case GameMode["8x6"]:
      return 8;
    case GameMode["10x6"]:
      return 10;
    default:
      return 6;
  }
};

export const getGameMode = (option: string) => {
  switch (option) {
    case '6x1':
      return GameMode['6x1'];
    case '6x6':
      return GameMode['6x6'];
    case '8x6':
      return GameMode['8x6'];
    case '10x6':
      return GameMode['10x6'];
    default:
      return GameMode['6x6'];
  }
};

const buttonGroup = document.querySelectorAll('.button-group .option');
let selectedOption = GameMode['6x6'];

buttonGroup.forEach((button) => {
  button.addEventListener('click', () => {
    buttonGroup.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    selectedOption = getGameMode(button.innerHTML);
    console.log(getGameMode(button.innerHTML), button.innerHTML);
  });
});

export const getSelectedOption = () => selectedOption;
