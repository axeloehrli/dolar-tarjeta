import { useState } from "react"
import styles from "../styles/NavbarItem.module.css"
import DownIcon from "../public/down.svg"
import Image from "next/image"

export default function NavbarItem({ data }) {
  const [showContent, setShowContent] = useState(false)
  return (
    <div className={styles.navbarItem}>
      <div className={styles.navbarItemMain}>
        <p>{data.mainTitle}</p>
        {data.contentTitles &&
          <div onClick={() => setShowContent(prevState => !prevState)} >
            <Image src={DownIcon} alt="Open" />
          </div>
        }

      </div>
      <div className={showContent ? styles.navbarItemContentActive : styles.navbarItemContent}>
        <hr className={styles.hr}></hr>
        {data.contentTitles && data.contentTitles.map(e => <p key={e}>{e}</p>)}
      </div>
    </div>
  )
}