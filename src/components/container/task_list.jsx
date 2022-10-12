import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskList = () => {
  const defaultTask1 = new Task(
    "Example 1",
    "Default description 1",
    true,
    LEVELS.URGENT
  );
  const defaultTask2 = new Task(
    "Example 2",
    "Default description 2",
    false,
    LEVELS.NORMAL
  );
  const defaultTask3 = new Task(
    "Example 3",
    "Default description 3",
    true,
    LEVELS.BLOCKING
  );

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("Task component is going to unmount...");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log(`Task: ${task}`);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    setTasks(tempTask);
  }

  function deleteTask(task) {
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  function addTask(task) {
    // const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  function TableT() {
    return tasks.length ? (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                task={task}
                key={index}
                complete={completeTask}
                remove={deleteTask}
              />
            );
          })}
        </tbody>
      </table>
    ) : (
      <p>There are no tasks, add one</p>
    );
  }
  return (
    <div className="" style={{color:"black"}}>
      <div className="col-12">
        <div className="card">
          {/*Card header (title) */}
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
          {/*Card Body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
           <TableT/>
          </div>
        </div>
      </div>
      <TaskForm add={addTask} />
    </div>
  );
};

export default TaskList;
