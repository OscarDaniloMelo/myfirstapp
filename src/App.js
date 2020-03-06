import React from "react";
import "./App.css";

import tasks from "./sample/tasks.json";

import Tasks from "./components/Tasks";
import Taskform from "./components/Taskform";

class App extends React.Component {
  state = {
    tasks: tasks
  };
  render() {
    return (
      <div>
        <Taskform/>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
