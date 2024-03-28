import './Timer.ts';
import { GameMode, getGameModeColumns } from './ButtonGroup';
import { deepCopy } from './common.js';
import { getCards } from './cards.js';

// Getting the url params to prepare the game
const urlParams = new URLSearchParams(window.location.search);
const gameMode = urlParams.get('mode') ?? GameMode['6x6'];
const username = urlParams.get('username');

const welcomeUser = document.getElementById('welcome-user') as HTMLElement;
welcomeUser.innerHTML = 'Welcome ' + username + '!';

const gameModeBox = document.getElementById('game-mode') as HTMLElement;
gameModeBox.innerHTML = 'Game mode: ' + gameMode;

let moves = 0;
const movesStatus = document.getElementById('moves') as HTMLElement;

let score = 0;
const scoreStatus = document.getElementById('score') as HTMLElement;

// Play again button logic
const playAgainButton = document.getElementById('play-again-button');
playAgainButton?.addEventListener('click', () => {
  window.location.href = 'game.html' + '?mode=' + gameMode + '&username=' + username;
});
const showPlayAgainButton = () => {
  playAgainButton?.classList.remove('hidden');
};

// ----------------------------------------
// Adding the generated cards into the right placeholder
const gameGrid = document.querySelector('.game-grid') as HTMLElement;

let templateColumns = '';
for (let i = 0; i < getGameModeColumns(gameMode); i++) {
  templateColumns += 'auto ';
}
gameGrid.style.gridTemplateColumns = templateColumns;

const rowSize = gameMode === GameMode['6x1'] ? 1 : 6;
const gameSize = getGameModeColumns(gameMode) * rowSize;
const gridCards = getCards(gameSize);
gameGrid.innerHTML = gridCards.join(' ');

// ----------------------------------------
// The game logic

type Card = {
  id: number;
  flipped: boolean;
  matched: boolean;
  image: string;
};
const emptyCard: Card = { id: -1, flipped: false, matched: false, image: '' };

// Initializing the cards according to the game size
const cards: Card[] = [];
for (let i = 0; i < gameSize; i++) {
  const card = deepCopy(emptyCard);
  card.id = i;
  cards.push(card);
}

// card rotation and animation duty
const cardFlip = (cardContainer: HTMLElement) => {
  const cardContainerInner = cardContainer.children[0];
  const rotateStatus = cardContainerInner.getAttribute('style');
  if (!rotateStatus) {
    cardContainerInner.setAttribute('style', 'transform: rotateY(180deg)');
  } else {
    cardContainerInner.setAttribute('style', '');
  }
};

// three variables to track the first and the second click of the user
let clickTracker = 0;
let selectedCard1: Card;
let selectedCard2: Card;

const resetTracker = () => {
  clickTracker = 0;
  selectedCard1 = emptyCard;
  selectedCard2 = emptyCard;
};

const isGameFinished = () => {
  let finished = true;
  for (const card of cards) {
    if (!card.matched) {
      finished = false;
    }
  }
  if (finished) {
    window.confirm('Congrats! You won!');
    return true;
  }
};

const cardContainers = document.querySelectorAll('.card-container');
cardContainers.forEach((cardContainer) => {
  cardContainer?.addEventListener('click', () => {
    // --------------------------
    // counting the user clicks
    moves += 1;
    movesStatus.innerHTML = moves.toString();
    // --------------------------

    // Getting the current card details
    const id = parseInt(cardContainer.id);
    const currentCard = cards[id];
    currentCard.image = cardContainer.getAttribute('image') as string;
    // --------------------------

    // Tracking the user clicks on cards to see if they are trying to flip two valid cards
    if (clickTracker === 0) {
      selectedCard1 = currentCard;
      clickTracker++;
    } else if (clickTracker === 1) {
      selectedCard2 = currentCard;
      clickTracker++;
    }
    // --------------------------

    // Different scenarios that can happen
    // 1. First click - Card is on its back
    // 2. First click - Card is on its front
    // 3. Second click - Card is on its back
    // 4. Second click - Card is on its front

    // Scenario 1
    if (clickTracker === 1 && !currentCard.flipped) {
      cardFlip(cardContainer as HTMLElement);
      currentCard.flipped = true;
    }

    // Scenario 2
    if (clickTracker === 1 && currentCard.flipped) {
      // do nothing as the card has already been matched.
      if (currentCard.matched) {
        clickTracker -= 1;
        selectedCard1 = emptyCard;
        return;
      }
    }

    // Scenario 3
    if (clickTracker === 2 && !currentCard.flipped) {
      cardFlip(cardContainer as HTMLElement);
      currentCard.flipped = true;
    }

    // Scenario 4
    if (clickTracker === 2 && currentCard.flipped) {
      // if the user is clicking on the same card
      if (selectedCard1.id === selectedCard2.id) {
        cardFlip(cardContainer as HTMLElement);
        currentCard.flipped = false;
        resetTracker();
        return;
      }

      // do nothing as the card has already been matched.
      if (currentCard.matched) {
        clickTracker -= 1;
        selectedCard2 = emptyCard;
        return;
      }
    }

    // checking to see if the cards match
    if (clickTracker === 2) {
      if (selectedCard1.image === selectedCard2.image) {
        selectedCard1.matched = true;
        selectedCard2.matched = true;

        setTimeout(() => {
          if (isGameFinished()) {
            showPlayAgainButton();
          }
        }, 500);
      } else {
        const cardId1 = selectedCard1.id;
        const cardId2 = selectedCard2.id;
        setTimeout(() => {
          const card1 = cards[cardId1];
          const card2 = cards[cardId2];
          card1.flipped = false;
          card2.flipped = false;
          const cardContainer1 = document.getElementById(`${cardId1}`) as HTMLElement;
          const cardContainer2 = document.getElementById(`${cardId2}`) as HTMLElement;
          cardFlip(cardContainer1);
          cardFlip(cardContainer2);
        }, 500);
      }

      // reverting the changes if the user did not match any cards successfully
      resetTracker();
    }
  });
});
