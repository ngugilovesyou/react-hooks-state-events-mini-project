import React from "react";
import Task from "./Task";

function TaskList({tasks,deletedItem}) {
  return (
    <div className="tasks">
       {tasks.map((task,index) => (
        <Task deletedItem={deletedItem} key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
