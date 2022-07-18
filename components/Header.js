import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.h1}>Dólar tarjeta</h1>
      </div>
    </header>
  )
}