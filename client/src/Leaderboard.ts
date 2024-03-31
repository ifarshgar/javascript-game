type HistoryRecord = {
  username: string;
  score: number;
};

type Message = {
  message: string;
};

type RecordsObject = { [key: string]: HistoryRecord };
const recordsObject: RecordsObject = {};

export const getRecordsObject = () => recordsObject;

// helper function for getAllHistoryRecords to print the results on the screen
const updateLeaderboard = (records: HistoryRecord[]) => {
  const result: string[] = [];
  for (const record of records) {
    const leaderboardItem = `
      <div class="row leaderboard-item mt">
        <h3 class="column">1.</h3>
        <h3 class="column">${record.username}</h3>
        <h3 class="column">${record.score}</h3>
      </div>
    `;
    result.push(leaderboardItem);
    recordsObject[record.username] = record;
  }
  const leaderboard = document.getElementById('leaderboard-table-records') as HTMLElement;
  leaderboard.innerHTML = result.join(' ');
};

// getting all previous records of users and their scores
export const getAllHistoryRecords = () => {
  fetch('http://localhost:8888/history')
    .then((res) => res.json())
    .then((records: HistoryRecord[]) => {
      if (records?.length) {
        updateLeaderboard(records);
      }
    })
    .catch((err) => console.error(err));
};

// save or udpate a user record in the MongoDB database
export const saveUserScore = (username: string, score: number) => {
  fetch('http://localhost:8888/history', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, score }),
  })
    .then((res) => res.json())
    .then((response: Message) => {
      console.log('server response: ', response.message);
    })
    .catch((err) => console.error(err));
};
