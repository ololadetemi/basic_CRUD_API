const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/blog', function (req, res) {
    res.send('Hello blog world')
  })

app.listen(3030, () => {
    console.log('server is running on port 3030');
});