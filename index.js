const { todos } = require('./pseudoDB');

const express = require('express');
const cors = require('cors');
const app = express();

// Enable all CORS Requests
app.use(cors());

app.get('/', (req, res) => {
  res.send("hello world");
});

app.get('/api/todos', (req, res) => {
  // Get the todos from the database
  todoArray = todos;
  res.send(todoArray);
})

app.listen(3000, () => console.log('listening on port 3000...'));