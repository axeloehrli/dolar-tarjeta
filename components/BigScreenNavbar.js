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
            }
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
              href: "/"
            },
            {
              title: "Lemoncash",
              href: "/"
            },
          ]
        }}
      />
      <NavbarItem
        data={{
          mainTitle: "Noticias",
        }}
      />
      <NavbarItem
        data={{
          mainTitle: "Contacto",
        }}
      />
    </nav>
  )
}