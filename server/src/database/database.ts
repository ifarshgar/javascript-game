import sqlite3 from 'sqlite3';

const HistoryTable = `
  CREATE TABLE IF NOT EXISTS History (
    username TEXT, 
    score INTEGER
  )`;

// Connect to the sqlite database
export const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
    initializeDatabase();
  }
});

// Database initial query
const initializeDatabase = () => {
  db.run(HistoryTable, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('SQLite database was initialized and is ready for use');
    }
  });
};

const getOne = async (query: string, params: any[]) => {
  try {
    const record = await new Promise((resolve, reject) => {
      db.get(query, params, (err, row) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
    return record;
  } catch (err) {
    console.log(err);
  }
};

const getAll = async (query: string) => {
  try {
    const record = await new Promise((resolve, reject) => {
      db.all(query, (err, row) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
    return record;
  } catch (err) {
    console.log(err);
  }
};

const insertOrUpdate = async (query: string, params: any[]) => {
  try {
    const success = await new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          console.error(err.message);
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
    return success;
  } catch (err) {
    console.log(err);
  }
};

export const getHistoryByUsername = async (username: string) => {
  const query = 'SELECT * FROM History WHERE username = ?';
  const record = await getOne(query, [username]);
  return record;
};

export const getAllHistories = async () => {
  const query = 'SELECT * FROM History';
  const records = await getAll(query);
  return records;
};

export const insertOrUpdateHistory = async (username: string, score: number) => {
  const insertQuery = 'INSERT INTO History (username, score) VALUES (?, ?)';
  const updateQuery = 'UPDATE History SET username = ?, score = ? WHERE username = ?';
  const previousRecord = await getHistoryByUsername(username);
  if (previousRecord) {
    const result = await insertOrUpdate(updateQuery, [username, score, username]);
    return result;
  } else {
    const result = await insertOrUpdate(insertQuery, [username, score]);
    return result;
  }
};
