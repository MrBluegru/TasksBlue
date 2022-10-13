import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

const TaskFormik = ({ add }) => {
  const initialValues = {
    name: "",
    description: "",
    completed: false,
    level: LEVELS.NORMAL,
  };

  function addTask(e) {
    let newTask = new Task(e.name, e.description, e.completed, e.level);
    add(newTask);
  }

  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name too short")
      .max(10, "Name too long")
      .required("Name is required"),
    description: Yup.string()
      .min(10, "Description too short")
      .max(20, "Description too long")
      .required("Description is required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={(values) => addTask(values)}
      >
        {({ touched, errors }) => (
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Form className="form-outline flex-fill">
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="form-control form-control-lg"
              />
              {errors.name && touched.name && (
                <ErrorMessage name="name" component="div" />
              )}
              <Field
                id="description"
                type="text"
                name="description"
                placeholder="Description"
                className="form-control form-control-lg"
              />
              {errors.description && touched.description && (
                <ErrorMessage name="description" component="div" />
              )}
              <Field
                as="select"
                id="level"
                name="level"
                className="form-control form-control-lg"
              >
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgent</option>
                <option value={LEVELS.BLOCKING}>Blocking</option>
              </Field>
              <button type="submit" className="btn btn-success btn-lg ms-2">
                Add
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormik;
