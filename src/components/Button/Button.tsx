import { Emoji } from "../../utils/types"

import { Container } from "./Button.styles"

function Button({ value }: any) {
  const checkValue = (event: any) => {
    const value = event.target.firstChild

    value.classList.remove("hidden")

    if (value.innerHTML === Emoji.bomb) {
      alert(`Oh no! ${Emoji.lost} You lost!`)

      const arr = document.querySelectorAll(".hidden")
      arr?.forEach((item: any) => item.classList.remove("hidden"))
    }
  }

  return (
    <Container onClick={checkValue}>
      <span className="hidden">{value}</span>
    </Container>
  )
}

export default Button
