import React, { useEffect, useState } from "react"

import { field, randomMines } from "../../utils/functions"
import Button from "../Button/Button"

import { Table, Container } from "./Board.styles"

function Board() {
  const [board, setBoard] = useState([])

  const startGame = () => {
    document.location.reload()
  }

  useEffect(() => {
    let mines = randomMines(10, 8, 8)
    setBoard(field(8, 8, mines))
  }, [])

  return (
    <Container>
      <button onClick={startGame}>New Game</button>
      <Table>
        <tbody>
          {board?.map((rows: number[], index: number) => (
            <tr key={`tr-${index}`}>
              {rows?.map((cols: number, index: number) => (
                <td key={`td-${index}`}>
                  <Button value={cols} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Board
