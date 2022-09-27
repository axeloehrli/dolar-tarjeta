import styles from "../styles/CalculateButton.module.css"
import { useState } from "react"
export default function CalculateButton({ handleClick }) {
  const [clickCount, setClickCount] = useState(0)
  const saveClick = async () => {
    try {
      const res = await fetch("https://api.ipify.org/?format=json")
      const json = await res.json()
      const userIp = json.ip

      fetch(
        "https://api.dolartarjeta.com.ar/calculate-button-click",
        {
          method: "POST",
          mode: "cors",
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({userIp: userIp})
        }
      )
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