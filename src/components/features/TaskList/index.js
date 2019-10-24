import React, { Component } from "react";
import PropTypes, { oneOfType } from "prop-types";
import styled from "styled-components";

import {
  Div,
  Loader,
  Checkbox,
  CheckboxSC,
  Button,
  ButtonSC
} from "../../general";
import { genRandomFiveTasks } from "../../../utils";

export const Task = props => {
  const { id, details, completed, onClick } = props;

  return (
    <Checkbox
      label={details}
      id={id}
      checked={completed}
      onClick={() => onClick(id)}
    />
  );
};

Task.propTypes = {
  details: PropTypes.string,
  completed: PropTypes.bool,
  id: oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func
};

Task.defaultProps = {
  details: "",
  completed: false,
  id: null,
  onClick: () => console.log("clicked!")
};

const ButtonDiv = styled(Div)`
  ${ButtonSC} {
    margin-right: 5px;
    margin-bottom: 15px;
  }
`;

export const TaskListSC = styled(Div)`
  display: flex;
  flex-direction: column;

  ${CheckboxSC} {
    margin-bottom: 10px;
  }
`;

export class TaskList extends Component {
  state = {
    tasks: [],
    displayedTasks: 5
  };

  componentDidMount() {
    this.setState({ tasks: this.props.tasks });
  }

  handleCheck = id => {
    this.setState(currState => ({
      tasks: currState.tasks.map(task => {
        return {
          id: task.id,
          details: task.details,
          completed: id === task.id ? !task.completed : task.completed
        };
      })
    }));
  };

  handleShowMore = () => {
    this.setState(prevState => ({
      displayedTasks: prevState.displayedTasks + 5
    }));
  };

  handleShowLess = () => {
    this.setState(prevState => ({
      displayedTasks: prevState.displayedTasks - 5
    }));
  };

  addAnotherRandomFiveTasks = () => {
    this.setState(prevState => ({
      // tasks: [...prevState.tasks, genRandomFiveTasks()]
      tasks: prevState.tasks.concat(genRandomFiveTasks())
    }));
  };

  render() {
    const { tasks, displayedTasks } = this.state;
    return (
      <Div>
        <h1>Tasks in sets of 5</h1>
        <ButtonDiv>
          <Button
            text="Add another random 5 tasks"
            onClick={this.addAnotherRandomFiveTasks}
          />
          <Button
            text="Show 5 more tasks"
            disabled={displayedTasks === tasks.length}
            onClick={this.handleShowMore}
          />
          <Button
            text="Hide 5 tasks"
            disabled={displayedTasks === 5}
            onClick={this.handleShowLess}
          />
        </ButtonDiv>
        {tasks.length ? (
          <TaskListSC>
            {tasks.slice(0, displayedTasks).map(task => (
              <Task key={task.id} {...task} onClick={this.handleCheck} />
            ))}
          </TaskListSC>
        ) : (
          <Loader />
        )}
      </Div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array
};

TaskList.defaultProps = {
  // tasks: [{ id: 1, details: "sweet", completed: false }]
  tasks: []
};
