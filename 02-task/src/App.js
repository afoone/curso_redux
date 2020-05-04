import React from 'react';
import TaskPage from './components/TaskPage'
import {connect} from 'react-redux'


function App(props) {
  
  return (
    <div className="App">
      <header className="App-header">
        <TaskPage tasks={props.tasks} />
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
