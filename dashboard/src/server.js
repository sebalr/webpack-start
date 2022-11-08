const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  const pathToFile = path.resolve(__dirname, '../dist/dashboard.html');
  const content = fs.readFileSync(pathToFile, 'utf-8');
  res.send(content);
});

app.listen(9000, () => console.log('app running port 9000'));
