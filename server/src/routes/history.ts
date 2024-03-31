import express from 'express';
import { getAllHistories, getHistoryByUsername, insertOrUpdateHistory } from '../database/database';

export const router = express.Router();

router.get('/', async (req, res) => {
  const records = await getAllHistories();
  res.json(records);
});

router.post('/', async (req, res) => {
  const username = req.body.username;
  const score = req.body.score;
  
  const success = await insertOrUpdateHistory(username, score);
  if (success) {
    res.status(201).send({ message: 'Record was saved successfully!' });
  } else {
    res.status(500).send({ message: 'Error saving the record.' });
  }
});
