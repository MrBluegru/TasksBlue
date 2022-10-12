import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  console.log(nameRef);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }
  const normalStyle = {
    color: "blue",
    fontWeight: "bold"
  }
  const urgentStyle = {
    color: "yellow",
    fontWeight: "bold"
  }
  const blokingStyle = {
    color: "tomato",
    fontWeight: "bold"
  }

  return (
    <form
      onSubmit={(e) => addTask(e)}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder="Task Name"
        />
        <input
          ref={descriptionRef}
          id="inputDescrip"
          type="text"
          className="form-control form-control-lg"
          required
          placeholder="Task Description"
        />
        <select
          ref={levelRef}
          defaultValue={LEVELS.NORMAL}
          id="selectLevel"
          className="form-control form-control-lg"
        >
          <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
          <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
          <option style={blokingStyle} value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type="submit" className="btn btn-success btn-lg ms-2">
          Add
        </button>
      </div>
    </form>
  );
};

TaskForm.protoType = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
