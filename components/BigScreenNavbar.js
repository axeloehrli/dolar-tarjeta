import styles from "../styles/BigScreenNavbar.module.css"
import NavbarItem from "./NavbarItem"
export default function BigScreenNavbar() {
  return (
    <nav className={styles.nav}>
      <NavbarItem
        data={{
          mainTitle: "Calculadoras",
          contentTitles: [
            {
              title: "Calculadora dólar tarjeta",
              href: "/"
            },
            {
              title: "Calculadora dólar Qatar",
              href: "/dolar-qatar"
            },
            {
              title: "Calculadora dólar blue",
              href: "/"
            }
          ]
        }}
      />
      <NavbarItem
        data={{
          mainTitle: "Simuladores",
          contentTitles: [
            {
              title: "Plazo fijo Banco Nación",
              href: "/simuladores/banco-nacion"
            },
            {
              title: "Plazo fijo Banco Santander",
              href: "/simuladores/banco-santander"
            },
            {
              title: "Plazo fijo Banco Credicoop",
              href: "/simuladores/banco-credicoop"
            },
            {
              title: "Plazo fijo Banco BBVA",
              href: "/simuladores/banco-bbva"
            },
            {
              title: "Plazo fijo Banco Galicia",
              href: "/simuladores/banco-galicia"
            },
          ]
        }}
      />
      <NavbarItem
        data={{
          mainTitle: "Tarjetas",
          contentTitles: [
            {
              title: "Mastercard",
              href: "/tarjetas/mastercard"
            },
            {
              title: "VISA",
              href: "/tarjetas/visa"
            },
            {
              title: "Ualá",
              href: "/tarjetas/uala"
            },
            {
              title: "Lemoncash",
              href: "/tarjetas/lemoncash"
            },
            {
              title: "Mercado Pago",
              href: "/tarjetas/mercado-pago"
            },
          ]
        }}
      />
      <NavbarItem
        data={{
          mainTitle: "Noticias",
        }}
      />
    </nav>
  )
}