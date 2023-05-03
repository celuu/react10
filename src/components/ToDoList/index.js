import { useState } from "react";
import "./ToDoList.css"

const ToDoList = () => {
    const [list, setList] = useState([
        { item: "go to grocery store",
            isCompleted: false
        }
    ]);

    const addToList = (value) => {
        const newToDo = [...list, {item: value, isCompleted: false}]
        setList(newToDo)
    }

    const deleteFromList = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.todoInput.value;
        if (inputValue) {
            console.log(inputValue)
            addToList(inputValue);
            event.target.reset();
        }
    };


    return (
      <>
        <div>
          <h1>To-Do List</h1>
          <form onSubmit={handleSubmit}>
            <label>
              New item:
              <input type="text" name="todoInput" />
            </label>
            <button type="submit">Add</button>
          </form>
          <ul>
            {list.map((item, index) => (
              <>
                <li key={index}>{item.item}</li>
                <button onClick={() => deleteFromList(index)}>Delete</button>
              </>
            ))}
          </ul>
        </div>
      </>
    );

}

export default ToDoList;