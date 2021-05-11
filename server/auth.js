const express = require('express');
const passport = require('passport');
const pool = require('./pool');
const bcrypt = require('bcrypt');
const router = express.Router();

// router.post('/login', passport.authenticate('local'), (req, res) => {
//   console.log('Reached /login endpoint');

//   res.status(201).json({
//     success: true,
//     message: 'Successfully authenticated',
//     user: req.user,
//   });
// });

// router.post('/logout', (req, res) => {
//   req.logout();

//   res.status(201).json({
//     success: true,
//     message: 'Successfully logged out',
//   });
// });

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // if field is missing
  if (!username || !password) {
    res.send({ err: 'Please fill in all fields.' });
  }

  // hash password
  try {
    bcrypt.hash(password, 10, async (err, password) => {
      const newAccount = await pool.query(
        'INSERT INTO accounts (username, password, user_type) VALUES ($1,$2,$3) ON CONFLICT (username) DO NOTHING;',
        [username, password, 'admin']
      );
      if (newAccount.rowCount) {
        res.send({ msg: 'Account successfully created.' });
      } else {
        res.send({
          err: 'An account with that email already exists.',
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
