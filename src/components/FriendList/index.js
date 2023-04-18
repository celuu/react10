import { useState } from "react"
import "./Friend.css"


const FriendList = () => {

    let list = ["Christine", "Jacob", "Morgan", "Nishant", "Kaushal", "Ashley", "Calli"]
    let [selectAll, setSelectAll] = useState(false)
    let [deselectAll, setDeselectAll] = useState(false)

    

    return (
      <div className="friend-container">
        <label>
          <input type="checkbox" ></input>
          Select All
        </label>
        <label>
          <input type="checkbox"></input>
          Deselect All
        </label>
        {list.map((person, idx) => {
          return (
            <>
              <label className="friend-labels">
                <input type="checkbox" key={idx} />
                person={person}
                id={idx}
              </label>
            </>
          );
        })}
      </div>
    );
}

export default FriendList