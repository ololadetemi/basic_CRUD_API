const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('Connected!'))
  .catch((err) => console.log('error connecting to database:', err));



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/blog', function (req, res) {
    res.send('Hello blog world')
  })

  const  port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});