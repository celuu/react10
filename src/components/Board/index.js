

const Board = () => {
    const rowLength = 10;
    const columnLength = 10;
      const grid = [];

    const createGrid = () => {
        for (let row = 0; row <= rowLength ; row++) {
        const currentRow = [];
        for (let col = 0; col <= columnLength; col++) {
            currentRow.push(createNode(row, col));
        }
        grid.push(currentRow);
        grid.push(currentRow);
        console.log(grid);
        }
        return grid;
    }  

    const createNode = (row, col) => {
      return {
        row,
        col,
      };
      console.log(row);
      console.log(col);
    };

    return (
      <>
      

      </>
    );

    

}

export default Board;