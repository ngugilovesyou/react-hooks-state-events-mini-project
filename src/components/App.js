import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [Tasks, setTasks]=useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const itemDisplayed = Tasks
  .filter(
    (item)=>{ 
      if(selectedCategory==='All') return true
      return selectedCategory === item.category
   })
   function addNewTask(newItem) {
    setTasks([...Tasks, newItem])
  }

  function deletedItem(deletedItem){
    setTasks(Tasks.filter((item)=>item.text !== deletedItem))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={categories}
        onButton={selectedCategory}
        selectedButton={setSelectedCategory}  />
      <NewTaskForm onTaskFormSubmit={addNewTask}
        categories={categories}/>
      <TaskList tasks={itemDisplayed} deletedItem={deletedItem}/>
    </div>
  );
}

export default App;
