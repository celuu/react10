import { useState } from "react";

const Board = () => {
    const rowLength = 5;
    const columnLength = 5;
    const [grid, setGrid] = useState([])

    const createGrid = () => {
        for (let row = 0; row <= rowLength ; row++) {
        const currentRow = [];
        for (let col = 0; col <= columnLength; col++) {
            currentRow.push(createNode(row, col));
        }
        grid.push(currentRow);
        }
        setGrid(grid)
    }  

    const createNode = (row, col) => {
      return {
        row,
        col,
      };
    };

    return (
      <>
        <button onClick={createGrid}>click here</button>
        <ul>{grid ?? grid.map((row) => row.map((col) => <li>{col}</li>))}</ul>
      </>
    );

    

}

export default Board;