import { Emoji } from './types'

const format = (mine: Number[]) => JSON.stringify(mine);

const field = (rowsCount: number, colsCount: number, mines: Number[][]) =>{
  let rows: any = [];

  for (let i = 0; i < rowsCount; i++) {
    rows[i] = [];
    for (let j = 0; j < colsCount; j++) { 
      if (mines.map(format).includes(`[${i},${j}]`)) {
        rows[i][j] = Emoji.bomb;
      } else {
        rows[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < colsCount; j++) {
      if (rows[i][j] !== Emoji.bomb) {
        if (rows[i - 1] !== undefined &&
          rows[i - 1][j - 1] === Emoji.bomb) rows[i][j]++;
        if (rows[i - 1] !== undefined &&
          rows[i - 1][j] === Emoji.bomb) rows[i][j]++;
        if (rows[i - 1] !== undefined &&
          rows[i - 1][j + 1] === Emoji.bomb) rows[i][j]++;

        if (rows[i][j - 1] === Emoji.bomb) rows[i][j]++;
        if (rows[i][j + 1] === Emoji.bomb) rows[i][j]++;

        if (rows[i + 1] !== undefined &&
          rows[i + 1][j - 1] === Emoji.bomb) rows[i][j]++;
        if (rows[i + 1] !== undefined &&
          rows[i + 1][j] === Emoji.bomb) rows[i][j]++;
        if (rows[i + 1] !== undefined &&
          rows[i + 1][j + 1] === Emoji.bomb) rows[i][j]++;
      }
    }
  }

  return rows;
}


const randomMines = (quantity: number, cols: number, rows: number) => {
  let mines = [];
  for (let i = 0; i < quantity; i++) {
    const positionRow = Math.floor(Math.random() * rows);
    const positionCol = Math.floor(Math.random() * cols);
    mines.push([positionRow, positionCol]);
  }
  return mines;
}

export {
  field,
  randomMines
}
