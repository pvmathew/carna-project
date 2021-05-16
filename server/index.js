const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

app.use('/auth', require('./auth'));
app.use('/users', require('./users'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
