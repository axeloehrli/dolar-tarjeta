import Image from "next/image"
import styles from "../styles/Header.module.css"
import MenuIcon from "../public/menu.svg"
import { useState } from "react"

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
        <div className={showMenu ? styles.navbarContainerActive : styles.navbarContainer}>
          <div className={styles.navbarMask} onClick={onMenuClick}>

          </div>
          <nav className={styles.navbar}>

          </nav>
        </div>
      </div>
    </header>
  )
}