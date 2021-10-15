import deleteBtn from "./../../../image/delete.png";
import toggle from "./../../../image/toggle.png";

import styles from "./TodoItem.module.scss";

const TodoItem = ({ id, body, status, todos, setTodos }) => {
  const deleteTask = (id) => {
    const deleteTasks = todos.filter((task) => task.id !== id);
    return setTodos(deleteTasks);
  };

  const toggleCompletion = () => {
    const newStatus = todos.map((task) => (task.status = !task.status));

    return setTodos(newStatus);
  };

  return (
    <li className={styles.tasksWrapper}>
      <div className={styles.tasksContainer} onClick={() => toggleCompletion()}>
        {/* <img className={screen} src={toggle} alt="" /> */}
        <p>{body}</p>
      </div>
      {/* <input type="checkbox" cheked={status} /> */}

      <div className={styles.imgWrapper} onClick={() => deleteTask(id)}>
        <img className={styles.imgDelete} src={deleteBtn} alt="" />
      </div>
    </li>
  );
};

export default TodoItem;
