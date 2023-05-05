import { useState } from "react";
import "./ToDoList.css"

const ToDoList = () => {
    const [list, setList] = useState([
        { item: "go to grocery store",
            isCompleted: false
        }
    ]);
    const [input, setInput] = useState("")

    const addToList = (value) => {
        const newToDo = [...list, {item: value, isCompleted: false}]
        setList(newToDo)
        setInput("")
    }

    const deleteFromList = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input) {
            addToList(input);
            setInput("")
        }
    };

    const isCompletedButtonClicked = (index) => {
      const newList = [...list];
      newList[index].isCompleted = !newList[index].isCompleted
      setList(newList)
    }



    return (
      <>
        <div>
          <h1>To-Do List</h1>

          <label>
            New item:
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
          <button onClick={() => addToList(input)}>Add</button>
          <ul>
            {list.map((item, index) => (
              <>
                <li key={index}>{item.item}</li>
                <button onClick={() => isCompletedButtonClicked(index)}>
                  {item.isCompleted ? "click to uncheck" : "mark to complete"}
                </button>
                <button onClick={() => deleteFromList(index)}>Delete</button>
              </>
            ))}
          </ul>
        </div>
      </>
    );

}

export default ToDoList;