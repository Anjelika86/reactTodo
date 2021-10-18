import deleteBtn from "./../../../image/delete.png";
import styles from "./TodoItem.module.scss";

const TodoItem = ({ id, body, status, todos, setTodos }) => {
  const deleteTask = (id) => {
    const deleteTasks = todos.filter((task) => task.id !== id);
    return setTodos(deleteTasks);
  };

  const toggleCompletion = (id) => {
    const newStatus = todos.map((task) => {
      const newTask = {
        ...task,
        status: task.id === id ? !task.status : task.status,
      };
      return newTask;
    });

    return setTodos(newStatus);
  };

  return (
    <li
      className={`${styles.tasksWrapper} ${
        status && `${styles.tasksWrapperTrue} `
      }`}
    >
      <div
        className={styles.tasksContainer}
        onClick={() => toggleCompletion(id)}
      >
        {" "}
        <input className={styles.checkbox} type="checkbox" cheked={status} />
        <p className={styles.overflowContainer}>{body}</p>
      </div>

      <div className={styles.imgWrapper} onClick={() => deleteTask(id)}>
        <img className={styles.imgDelete} src={deleteBtn} alt="" />
      </div>
    </li>
  );
};

export default TodoItem;
