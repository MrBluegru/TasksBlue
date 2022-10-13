import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, completed, remove }) => {
  // useEffect(() => {
  //   console.log("Created Task");
  //   return () => {
  //     console.log(`Task: ${task.name} is going to unmount`);
  //   };
  // }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <p className="badge bg-primary">{task.level}</p>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <p className="badge bg-warning">{task.level}</p>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <p className="badge bg-danger">{task.level}</p>
          </h6>
        );
      default:
        break;
    }
  }

  function taskIconComplete() {
    if (task.completed)
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-on task-action"
          style={{ color: "green", fontWeight: "bold" }}
        ></i>
      );
    else {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-off task-action"
          style={{ color: "grey", fontWeight: "bold" }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <p className="ms-2">{task.name}</p>
      </th>
      <td className="align-middle">
        <p>{task.description}</p>
      </td>
      <td className="align-middle">{taskLevelBadge()}</td>
      <td>
        <i className="align-middle">{taskIconComplete()}</i>
        <i
          className="bi-trash task-action"
          onClick={() => remove(task)}
          style={{ color: "tomato", fontSize: "2rem" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  completed: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
