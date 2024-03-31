import { GameMode, getGameModeColumns } from './ButtonGroup';
import { getCards } from './Cards';
import { getScore } from './Score';

// Getting the url params to prepare the game
const urlParams = new URLSearchParams(window.location.search);
const gameMode = urlParams.get('mode') ?? GameMode['6x6'];
export const username = urlParams.get('username');

const welcomeUser = document.getElementById('welcome-user') as HTMLElement;
welcomeUser.innerHTML = 'Welcome ' + username + '!';

const gameModeBox = document.getElementById('game-mode') as HTMLElement;
gameModeBox.innerHTML = 'Game mode: ' + gameMode;
// ----------------------------------------

// Play again button logic
const playAgainButton = document.getElementById('play-again-button');
playAgainButton?.addEventListener('click', () => {
  window.location.href =
    'game.html' + '?mode=' + gameMode + '&username=' + username + '&score=' + getScore();
});
export const showPlayAgainButton = () => {
  playAgainButton?.classList.remove('hidden');
};
// ----------------------------------------

// Adding the generated cards into the designated placeholder
const gameGrid = document.querySelector('.game-grid') as HTMLElement;

let templateColumns = '';
for (let i = 0; i < getGameModeColumns(gameMode); i++) {
  templateColumns += 'auto ';
}
gameGrid.style.gridTemplateColumns = templateColumns;

export const getRowSize = () => (gameMode === GameMode['6x1'] ? 1 : 6);
export const getGameSize = () => getGameModeColumns(gameMode) * getRowSize();

const gridCards = getCards(getGameSize());
gameGrid.innerHTML = gridCards.join(' ');
// ----------------------------------------
