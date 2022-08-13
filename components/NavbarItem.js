import { useState } from "react"
import styles from "../styles/NavbarItem.module.css"
import DownIcon from "../public/down.svg"
import Image from "next/image"
import Link from "next/link"

export default function NavbarItem({ data }) {
  const [showContent, setShowContent] = useState(false)
  return (
    <div
      className={styles.navbarItem}
      onMouseOver={
        () => {
          if (data.contentTitles) {
            setShowContent(true)
          }
        }
      }
      onMouseLeave={
        () => {
          if (data.contentTitles) {
            setShowContent(false)
          }
        }
      }
    >
      <div
        className={styles.navbarItemMain}
      >
        <p>{data.mainTitle}</p>
        {data.contentTitles &&
          <Image src={DownIcon} alt="Open" />
        }

      </div>
      <div className={showContent ? styles.navbarItemContentActive : styles.navbarItemContent}>
        {data.contentTitles && data.contentTitles.map(e =>
          <Link href={e.href} key={e.title}>
            <p>{e.title}</p>
          </Link>
        )}
      </div>
    </div>
  )
}