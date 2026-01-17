import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));

  return (
    <div style={{ margin: "50px", fontFamily: "Arial, sans-serif" }}>
      <h2>Todo List</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />
        <button onClick={addTask} style={{ padding: "8px 15px", cursor: "pointer" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {sortedTasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "300px",
              padding: "8px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span>{task.text}</span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {tasks.length === 0 && <p style={{ color: "#777" }}>No tasks yet.</p>}
    </div>
  );
}

export default App;