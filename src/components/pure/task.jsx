import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <spam className="badge bg-primary">{task.level}</spam>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <spam className="badge bg-warning">{task.level}</spam>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <spam className="badge bg-danger">{task.level}</spam>
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
          className="bi-toggle-on"
          style={{ color: "green", fontWeight: "bold" }}
        ></i>
      );
    else {
      return (
        <i
          className="bi-toggle-off"
          style={{ color: "grey", fontWeight: "bold" }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <spam className="ms-2">{task.name}</spam>
      </th>
      <td className="align-middle">
        <spam>{task.description}</spam>
      </td>
      <td className="align-middle">{taskLevelBadge()}</td>
      <td className="align-middle">{taskIconComplete()}</td>
      <i className="bi-trash" style={{ color: "tomato", fontSize: "2rem" }}></i>
    </tr>

    // <div>
    //   <h2 className="task-name">Nombre: {task.name}</h2>
    //   <h3>Descripción: {task.description}</h3>
    //   <h4>Level: {task.level}</h4>
    //   <h5>This task is: {task.completed ? "Is completed" : "Not completed"}</h5>
    // </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
