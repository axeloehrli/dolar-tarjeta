import Link from "next/link"
import styles from "../styles/Footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.header}>Dólar Tarjeta</h2>
      <div className={styles.bottom}>
        <Link href="/sobre-nosotros">
          <p>Sobre nosotros</p>
        </Link>
        <Link href="/politica-de-privacidad">
          <p>Política de privacidad</p>
        </Link>
        <Link href="/contacto">
          <p>Contacto</p>
        </Link>
      </div>
      <p className={styles.copyright}>
        © 2022 Dólar Tarjeta. Todos los derechos reservados.
      </p>
    </footer>
  )
}