import React from 'react';
import './styles.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  return (
    <div className="wrapper">
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
