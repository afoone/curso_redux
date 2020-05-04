import React, { useEffect } from 'react';
import TaskPage from './components/TaskPage'
import { connect } from 'react-redux'
import { getTasks } from './actions'


function App(props) {


  const { dispatch } = props;

  useEffect(() => {
    console.log("effect");
    dispatch(getTasks())
  }, [dispatch])

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
