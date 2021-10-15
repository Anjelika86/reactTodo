import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoList from "./TodoList";
import styles from "./Todo.module.scss";
import { TODO_SCHEMA } from "../../utils/validationSchemas";

const ToDo = ({ todos, setTodos }) => {
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
      <h1 className={styles.totoHeading}>ToDo List</h1>
      <Formik
        validationSchema={TODO_SCHEMA}
        initialValues={{ taskText: "" }}
        onSubmit={submitForm}
      >
        {(props) => {
          return (
            <Form>
              <Field type="text" name="taskText" />
              <ErrorMessage name="taskText">
                {(message) => <div>{message}</div>}
              </ErrorMessage>
              <button type="submit">Add</button>
            </Form>
          );
        }}
      </Formik>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ToDo;
