import styles from "../styles/CalculateButton.module.css"
import { useState } from "react"
export default function CalculateButton({ handleClick }) {
  const [clickCount, setClickCount] = useState(0)
  const saveClick = async () => {
    try {
      const res = await fetch("https://api.ipify.org/?format=json")
      const json = await res.json()
      const userIp = json.ip

      const locationRes = await fetch(`https://ipwho.is/${userIp}`)
      const locationJson = await locationRes.json()
      
      const myApiUrl = process.env.NEXT_PUBLIC_MY_API_URL
      
      fetch(
        `${myApiUrl}/calculate-button-click`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              userIp: userIp,
              lat: locationJson.latitude,
              lng: locationJson.longitude,
              city: locationJson.city,
              region: locationJson.region,
              country: locationJson.country,
            }
          )
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
        if (clickCount < 1) {
          saveClick()
          setClickCount(ps => ps + 1)
          console.log("hello save");
        }
      }}
    >
      Calcular
    </button>
  )
}