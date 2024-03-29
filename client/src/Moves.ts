let moves = 0;
const movesStatus = document.getElementById('moves') as HTMLElement;

export const updateUserMoves = () => {
  moves += 1;
  movesStatus.innerHTML = moves.toString();
};

export const getMoves = () => moves;
