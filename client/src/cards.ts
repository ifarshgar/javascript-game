import { getRandomInt } from './common';

enum CardTypes {
  'Clubs',
  'Diamonds',
  'Hearts',
  'Spades',
}

export const getCards = (total: number) => {
  const cards: string[] = [];
  let index = 0;

  for (let i = 0; i < Math.floor(total / 2); i++) {
    const randomType = getRandomInt(0, 4);
    const randomCard = getRandomInt(1, 14);
    const image = `${'/src/images/' + CardTypes[randomType] + '/' + randomCard + '.svg'}`;
    const imageName = `${CardTypes[randomType] + '/' + randomCard}`;
    
    // Making a pair of cards randomly selected from the deck
    const card1 = `
      <div class="card-container" id=${index++} image=${imageName}>
        <div class="card-inner">
          <img class="card-front" src=${image} draggable="false" alt="card front" />
          <img class="card-back" src="/src/images/card-back.png" draggable="false" alt="card back" />
        </div>
      </div>
	  `;
    const card2 = `
      <div class="card-container" id=${index++} image=${imageName}>
        <div class="card-inner">
        <img class="card-front" src=${image} draggable="false" alt="card front" />
          <img class="card-back" src="/src/images/card-back.png" draggable="false" alt="card back" />
        </div>
      </div>
	  `;
    cards.push(card1);
    cards.push(card2);
  }

  // shuffling the cards
  for (let i = 0; i < total; i++) {
    const random = getRandomInt(0, total);
    const temp = cards[i];
    cards[i] = cards[random];
    cards[random] = temp;
  }

  return cards;
};
