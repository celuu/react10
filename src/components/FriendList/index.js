import { useEffect, useState } from "react"
import "./Friend.css"


const FriendList = () => {

    const [list, setList] = useState([
      {
        name: "Christine",
        checked: false,
      },
      {
        name: "Jacob",
        checked: false,
      },
      {
        name: "Morgan",
        checked: false,
      },
      {
        name: "Nishant",
        checked: false,
      },
      {
        name: "Kaushal",
        checked: false,
      },
      {
        name: "Ashley",
        checked: false,
      },
      {
        name: "Calli",
        checked: false,
      }
    ]);

    

    const selectAllClickHandler = (e) => {
        if(!e.target.checked) return;
        const newList = list;
        newList.forEach((person) => {
          person.checked = true;
        });
        setList([...newList]);
    }

    const deselectAllClickHandler = (e) => {
        if(!e.target.checked) return;
        const newList = list;
        newList.forEach((person) => {
          person.checked = false;
        });
        setList([...newList]);
    }

    const clickCheckboxHandler = (e, idx) => {
        list[idx].checked = e.target.checked
        setList([...list])
    }

    return (
      <div className="friend-container">
        <label>
          <input type="checkbox" onClick={e => selectAllClickHandler(e)}></input>
          Select All
        </label>
        <label>
          <input type="checkbox" onClick={e => deselectAllClickHandler(e)}></input>
          Deselect All
        </label>
        {list.map((person, idx) => {
            console.log(person);
          return (
            <>
              <label className="friend-labels">
                <input type="checkbox" key={idx} name={person.name} id={idx} checked={person.checked} onChange={(e) => clickCheckboxHandler(e, idx)} />
                {person.name}
              </label>
            </>
          );
        })}
      </div>
    );
}

export default FriendList