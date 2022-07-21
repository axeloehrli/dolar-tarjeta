import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.h2}>Dólar tarjeta</h2>
      </div>
    </header>
  )
}