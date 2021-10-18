import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoList from "./TodoList";
import styles from "./Todo.module.scss";
import { TODO_SCHEMA } from "../../utils/validationSchemas";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      body: text,
      status: false,
    };
    const newTasks = [...todos, newTask];

    setTodos(newTasks);
  };
  const submitForm = (values, formikBag) => {
    const { taskText } = values;
    addTask(taskText);

    formikBag.resetForm();
  };

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.todoHeading}>ToDo List</h1>
      <div className={styles.todoWrapper}>
        <Formik
          validationSchema={TODO_SCHEMA}
          initialValues={{ taskText: "" }}
          onSubmit={submitForm}
        >
          {(props) => {
            return (
              <Form className={styles.formContainer}>
                <Field
                  className={styles.fieldText}
                  type="text"
                  name="taskText"
                  placeholder="New task"
                />
                <ErrorMessage name="taskText">
                  {(message) => <div>{message}</div>}
                </ErrorMessage>
                <button className={styles.btnSubmit} type="submit">
                  Add task
                </button>
              </Form>
            );
          }}
        </Formik>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default ToDo;
