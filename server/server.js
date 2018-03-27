const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongoose} = require('./db/mongoose');
const { Todo, User } = require('./model');

const port = process.env.PORT || 5001;
const IP = process.env.IP;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Express Working')
})

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save()
    .then(data => res.send(data), err => res.status(400).send(err))
})


app.get('*', (req, res) => {
  res.send('404 Error');
})

app.listen(port, () => console.log(`Express on port ${port}`));