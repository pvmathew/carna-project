const express = require('express');
const passport = require('passport');
const pool = require('./pool');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/all', async (req, res) => {
  let result = await pool.query(
    'SELECT user_id, username, user_type FROM accounts'
  );
  if (result.rows) {
    return res.send({
      users: result.rows,
    });
  }
});

module.exports = router;
