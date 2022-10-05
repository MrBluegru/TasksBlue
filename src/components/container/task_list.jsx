import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";

const TaskList = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  const [task, setTask] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("Task component is going to unmount...");
    };
  }, [task]);

  const changeCompleted = (id) => {
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
