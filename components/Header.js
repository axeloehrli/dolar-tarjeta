import Image from "next/image"
import styles from "../styles/Header.module.css"
import MenuIcon from "../public/menu.svg"
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.h2}>Dólar tarjeta</h2>
        <Image width={30} height={30} src={MenuIcon}  alt="menu"/>
      </div>
    </header>
  )
}