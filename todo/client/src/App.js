import React, {
  Fragment
} from 'react';
import './App.css';

//components 
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks'; 


function App() {
  return (
    <Fragment>
      <div className="container">
        <AddTask></AddTask>
        <ListTasks></ListTasks>
      </div>
    
    </Fragment>
  )
}

export default App;