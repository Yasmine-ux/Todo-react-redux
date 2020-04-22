import React from 'react';
import './App.css';
import NewTodo from './Components/Todo';
import TodoList from './Components/TodoItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NewTodo/>
       <TodoList/>
      </header>
    </div>
  );
}

export default App;
