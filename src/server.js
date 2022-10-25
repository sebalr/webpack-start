const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/hi', (req, res) => {
  const pathToFile = path.resolve(__dirname, '../dist/index.html');
  const content = fs.readFileSync(pathToFile, 'utf-8');
  res.send(content);
});

app.get('/roman', (req, res) => {
  const pathToFile = path.resolve(__dirname, '../dist/roman.html');
  const content = fs.readFileSync(pathToFile, 'utf-8');
  res.send(content);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.listen(3000, () => console.log('app running port 3000'));
