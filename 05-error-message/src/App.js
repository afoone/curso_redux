import React, { useEffect } from 'react';
import TaskPage from './components/TaskPage'
import { connect } from 'react-redux'
import { getTasks, setMessage } from './actions'
import FlashMessage from './components/FlashMessage';


function App(props) {


  const { dispatch, tasks, message } = props;

  useEffect(() => {
    console.log("effect");
    dispatch(getTasks());
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      dispatch(setMessage(null))
    }, 3000);
  }, [message])




  return (
    <div className="App">
      <header className="App-header">
        {message ? <FlashMessage message={message}></FlashMessage> : null}
        <TaskPage tasks={tasks} />
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    message: state.message
  }
}

export default connect(mapStateToProps)(App);
