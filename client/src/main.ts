import './ButtonGroup.ts';
import { getSelectedOption } from './ButtonGroup';
import { getAllHistoryRecords, getRecordsObject } from './Leaderboard';
// Write your code here

// You can delete this 👍
type Response = {
  message: string;
};
fetch('http://localhost:8888?message=hello')
  .then((r) => r.json())
  .then((response: Response) => {
    console.log('server response: ', response?.message);
  })
  .catch((err) => console.error(err));

// Getting the user name
const usernameInput = document.getElementById('username');
const usernameAlert = document.getElementById('username-alert');
let username = '';
usernameInput?.addEventListener('keyup', (event) => {
  const value = (event.target as HTMLInputElement).value;
  username = value;
});
// ------------------------------------------

// The logic behind the play button and going to the main game scene.
const playButton = document.getElementById('play-button');
playButton?.addEventListener('click', () => {
  // if the user has entered a username
  if (username) {
    usernameAlert?.classList.add('hidden');
    // getting the user possible previous scores
    const records = getRecordsObject();
    const score = records[username]?.score ?? 0;
    // going to the main game screen
    window.location.href = 'game.html' + '?mode=' + getSelectedOption() + '&username=' + username + '&score=' + score;
  } else {
    usernameAlert?.classList.remove('hidden');
  }
});
// ------------------------------------------

// getting all previous records of users and their scores for the leaderboard table
getAllHistoryRecords();