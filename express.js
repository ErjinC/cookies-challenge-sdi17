const express = require('express');
const app = express();
const port = 8080;
var cookieParser = require('cookie-parser')

app.listen(port, () => console.log(`Express server listening on port ${port}`));
app.use(cookieParser());

app.get('/login/', function(req, res) {
  res.cookie('name', 'username')
  console.log(`Your username is ${req.cookies.name}!`)
})
app.get('/hello', function(req, res) {
  res.status(200).send(`Welcome ${req.cookies.name}!`);
})