import React from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskList = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );
  const changeState = (id) => {
    console.log(`ToDo: Cambiar estado de una tarea`);
  };

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
