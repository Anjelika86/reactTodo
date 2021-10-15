import React, { useState } from "react";

import "./App.css";
import ToDo from "./components/ToDo";

const tasksData = [{ id: 1, body: "", status: false }];
function App() {
  const [todos, setTodos] = useState([]);

  return <ToDo todos={todos} setTodos={setTodos} />;
}

export default App;
