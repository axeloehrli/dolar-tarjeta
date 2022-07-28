import Image from "next/image"
import styles from "../styles/Header.module.css"
import MenuIcon from "../public/menu.svg"
import { useState } from "react"
import MenuData from "../MenuData"
import Link from "next/link"


export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const onMenuClick = () => {
    setShowMenu(prevState => !prevState)
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.h2}>Dólar tarjeta</h2>
        <Image width={30} height={30} src={MenuIcon} alt="menu" onClick={onMenuClick} />
        <div className={showMenu ? styles.navbarContainerActive : styles.navbarContainer} onClick={onMenuClick}>
          <div className={styles.navbarMask} >

          </div>
          <nav className={styles.navbar}>
            {MenuData.map(e =>
              <Link
                href={e.href}
                key={e.title}
              >
                <p
                  className={styles.navbarParagraph}
                >
                  {e.title}
                </p>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}