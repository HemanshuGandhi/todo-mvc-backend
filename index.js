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

app.delete('/api/todos', (req, res) => {
  todos.splice(0, todos.length);
  // Respond with empty array
  res.send(todos);
})

app.delete('/api/todos:id', (req, res) => {
  // Look up the todo
  const todo = todos.find(todo => todo.ID === parseInt(req.params.id));
  // Not existing, return 404
  if (!todo) {
    res.status(404).send('The todo with given ID was not found.')
  }
  // Delete the todo
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  // Respond with deleted todo, by convention.
  res.send(todo);
})

app.listen(3000, () => console.log('listening on port 3000...'));