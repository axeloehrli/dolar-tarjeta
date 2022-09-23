import styles from "../styles/CalculateButton.module.css"
import { useState } from "react"
export default function CalculateButton({ handleClick }) {
  const [clickCount, setClickCount] = useState(0)
  const saveClick = () => {
    try {
      fetch("https://api.dolartarjeta.com.ar/calculate-button-click", { method: "POST", mode: "no-cors" })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button
      className={styles.button}
      onClick={() => {
        handleClick()
        if (clickCount < 5) {
          saveClick()
          setClickCount(ps => ps + 1)
        }
      }}
    >
      Calcular
    </button>
  )
}