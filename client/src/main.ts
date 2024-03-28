import './style.css';
import './ButtonGroup.ts';
import { getSelectedOption } from './ButtonGroup';
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

const usernameInput = document.getElementById('username');
const usernameAlert = document.getElementById('username-alert');
let username = '';
usernameInput?.addEventListener('keyup', (event) => {
  const value = (event.target as HTMLInputElement).value;
  username = value;
});

const playButton = document.getElementById('play-button');
playButton?.addEventListener('click', () => {
  if (username) {
    usernameAlert?.classList.add('hidden');
    window.location.href = 'game.html' + '?mode=' + getSelectedOption() + '&username=' + username;
  } else {
    usernameAlert?.classList.remove('hidden');
  }
});

// ------------------------------------------

