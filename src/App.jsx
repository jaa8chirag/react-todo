import { useState } from "react";

function App() {
  const [task, setTask] = useState("");   
  const [tasks, setTasks] = useState([]); 

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]); 
      setTask(""); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


