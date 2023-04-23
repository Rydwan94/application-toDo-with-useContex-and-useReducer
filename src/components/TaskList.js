import { useContext } from "react";

import { tasksContext } from "./TasksProvider";

import "../css/TaskList.css";

const doneTaskStyle = {
  textDecoration: "line-through",
  color: "black",
  buttonStyle: {
    backgroundColor: "#2c2d2c",
  },
};

const TaskList = () => {
  const { state, Remove, TaskDone, TaskPriority } = useContext(tasksContext);

  const taskList = state.map((item) => (
    <li key={item.id}>
      <p
        className={item.priority ? "taskPriority" : null}
        style={item.isDone ? doneTaskStyle : null}
      >
        {item.text}
      </p>
      <div className="taskInfoContainer">
        <div className="buttonGroup">
          <button onClick={() => Remove(item.id)}>Remove</button>
          <button
            style={item.isDone ? doneTaskStyle.buttonStyle : null}
            onClick={() => TaskDone(item.id)}
          >
            {item.isDone ? "Not done" : "Done"}
          </button>
        </div>
        <label>
          {" "}
          Priority
          <input
            type="checkbox"
            onChange={() => TaskPriority(item.id)}
            checked={item.priority}
          />
        </label>
        <div className="timeContainer">
          <em>Added date and time: {item.date}/{item.time}</em>
        </div>
      </div>
    </li>
  ));
  if (state.length === 0) {
    return <h3>You dont have tasks</h3>;
  } else if (state.length > 0) {
    return (
      <div className="TaskList">
        <ul>{taskList}</ul>
      </div>
    );
  }
};

export default TaskList;
