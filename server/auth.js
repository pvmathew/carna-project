const express = require('express');
const passport = require('passport');
const pool = require('./pool');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', async (req, res) => {
  console.log('In /login endpoint');
  const { username, password } = req.body;
  console.log(req.body);

  // CHeck for all fields
  if (!username || !password) {
    return res.send({ err: 'Please fill in all fields' });
  }

  let result = await pool.query(
    'SELECT user_id, username, password, user_type FROM accounts where username=$1',
    [username]
  );

  if (result.rowCount) {
    let account = result.rows[0];
    let passwordMatch = await bcrypt.compare(password, account.password);
    if (!passwordMatch) return res.send({ err: 'Password is incorrect' });
    let token = jwt.sign({ username }, 'SUPER_SECRET_KEY');
    return res.send({
      token,
      username: account.username,
      type: account.user_type,
    });
  }
});

router.post('/register', async (req, res) => {
  console.log('In /register endpoint');

  const { username, userType, password } = req.body;

  // if field is missing
  if (!username || !password) {
    return res.send({ err: 'Please fill in all fields.' });
  }

  // hash password
  try {
    bcrypt.hash(password, 10, async (err, password) => {
      const newAccount = await pool.query(
        'INSERT INTO accounts (username, user_type, password) VALUES ($1,$2,$3) ON CONFLICT (username) DO NOTHING;',
        [username, userType, password]
      );

      if (newAccount.rowCount) {
        res.send({ msg: 'Account successfully created.' });
      } else {
        return res.send({
          err: 'An account with that username already exists.',
        });
      }
    });
  } catch (err) {
    throw err;
  }
});

router.get('/sessions', (req, res) => {
  res.status(201).json(req.sessionStore.sessions);
});
module.exports = router;
