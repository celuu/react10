import { useState } from "react"
import "./Friend.css"


const FriendList = () => {

    const [filterClicked, setFilterClicked] = useState(false)
    
    const [list, setList] = useState([
      {
        name: "Christine",
        checked: false,
        age: 25
      },
      {
        name: "Jacob",
        checked: false,
        age: 35
      },
      {
        name: "Morgan",
        checked: false,
        age: 6
      },
      {
        name: "Nishant",
        checked: false,
        age: 21
      },
      {
        name: "Kaushal",
        checked: false,
        age: 45
      },
      {
        name: "Ashley",
        checked: false,
        age: 60
      },
      {
        name: "Calli",
        checked: false,
        age: 35
      }
    ]);

    const [filteredList, setFilteredList] = useState(list);

    const selectAllClickHandler = (e) => {
        if(!e.target.checked) return;
        list.forEach((person) => {
          person.checked = true;
        });
        setList([...list]);
    }

    const deselectAllClickHandler = (e) => {
        if(!e.target.checked) return;
        list.forEach((person) => {
          person.checked = false;
        });
        setList([...list]);
    }

    const clickCheckboxHandler = (e, idx) => {
        list[idx].checked = e.target.checked
        setList([...list])
    }

    const filterAgeClickHandler = (e, idx) => {
        if(e.target.id === "below-21") {
          const filteredList = Object.keys(list)
            .filter((key) => key.includes("age"))
          setFilteredList(filteredList)
        } else if (e.target.id === "21-25") {
        } else if (e.target.id === "25-35") {
        } else {
        }
    }


    return (
      <div className="total-container">
        <div className="all-container">
          <label className="select-all">
            <input
              type="checkbox"
              onClick={(e) => selectAllClickHandler(e)}
            ></input>
            Select All
          </label>
          <label className="deselect-all">
            <input
              type="checkbox"
              onClick={(e) => deselectAllClickHandler(e)}
            ></input>
            Deselect All
          </label>
          <div className="fiter-dropdown">
            <button
              className="age-button"
              onClick={(e) => setFilterClicked((prev) => !prev)}
            >
              Filter By Age
            </button>
            <div className={filterClicked ? "age-options" : "no-age-options"}>
              <li
                className="each-option"
                id="below-21"
                onClick={filterAgeClickHandler}
              >
                5 - 21
              </li>
              <li
                className="each-option"
                id="21-25"
                onClick={filterAgeClickHandler}
              >
                21 -25
              </li>
              <li
                className="each-option"
                id="25-35"
                onClick={filterAgeClickHandler}
              >
                25 - 35
              </li>
              <li
                className="each-option"
                id="35plus"
                onClick={filterAgeClickHandler}
              >
                35 +
              </li>
            </div>
          </div>
        </div>

        <div className="friend-container">
          {list.map((person, idx) => {
            return (
              <>
                <label className="friend-labels">
                  <input
                    type="checkbox"
                    key={idx}
                    name={person.name}
                    id={idx}
                    checked={person.checked}
                    onChange={(e) => clickCheckboxHandler(e, idx)}
                  />
                  {person.name}
                </label>
              </>
            );
          })}
        </div>
      </div>
    );
}

export default FriendList