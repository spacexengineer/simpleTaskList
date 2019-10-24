import React, { Component } from "react";

import { TaskList } from "./components/features";

import { genRandomFiveTasks } from "./utils";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList tasks={genRandomFiveTasks()} />
      </div>
    );
  }
}

export default App;
