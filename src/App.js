import React from 'react';
import './App.css';
import AddTodo from './components/addTodo/';

const App = () => (
  <div className="App">
    <h1>Todo list</h1>
    <AddTodo submitTodo={() => {}} />
  </div>
);

export default App;
