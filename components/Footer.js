import Link from "next/link"
import styles from "../styles/Footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.header}>Dólar Tarjeta</h2>
      <div className={styles.bottom}>
        <Link href="https://www.instagram.com/axel_oehrli/">
          <p>Contacto</p>
        </Link>
        <Link href="/">
          <p>Política de privacidad</p>
        </Link>
        <Link href="/">
          <p>Política de cookies</p>
        </Link>
      </div>
      <p className={styles.copyright}>
        © 2022 Dólar Tarjeta. Todos los derechos reservados.
      </p>
    </footer>
  )
}