const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res) => {
  const pathToFile = path.resolve(__dirname, '../dist/image-caption.html');
  const content = fs.readFileSync(pathToFile, 'utf-8');
  res.send(content);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.listen(9003, () => console.log('app running port 9003'));
