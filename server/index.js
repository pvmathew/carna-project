const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', require('./auth'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
