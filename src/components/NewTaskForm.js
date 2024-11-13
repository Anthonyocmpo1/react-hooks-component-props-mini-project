import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
 
  const [text, setText] = useState(""); 
  const [category, setCategory] = useState(categories[0]); 

  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (text.trim()) {
      
      const newTask = {
        id: Date.now(), 
        text,
        category,
      };
      
     
      onTaskFormSubmit(newTask);

      
      setText("");
      setCategory(categories[0]);
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={handleTextChange} 
          placeholder="Enter task details" 
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categories
            .filter((cat) => cat !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;