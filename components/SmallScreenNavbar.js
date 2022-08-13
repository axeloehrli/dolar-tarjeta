import styles from "../styles/SmallScreenNavbar.module.css"
import CloseIcon from "../public/close.svg"
import Image from "next/image"
import SmallScreenNavbarItem from "./SmallScreenNavbarItem"
import {useState} from "react"
export default function SmallScreenNavbar({showNavbar, toggle}) {
  return (
    <nav className={showNavbar ? "smallScreenNav active" : "smallScreenNav"}>
      <div className="smallScreenNavImg" onClick={toggle}>
        <Image width={30} height={30} src={CloseIcon} alt="Close Icon" />
      </div>
      <h2 className="smallScreenNavH2">Dólar tarjeta</h2>
      <div className="smallScreenNavItems">
        <SmallScreenNavbarItem
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
        <SmallScreenNavbarItem
          data={{
            mainTitle: "Simuladores",
            contentTitles: [
              {
                title: "Plazo fijo Banco Nación",
                href: "/"
              },
              {
                title: "Plazo fijo Banco Provincia",
                href: "/"
              }
            ]
          }}
        />
        <SmallScreenNavbarItem
          data={{
            mainTitle: "Tarjetas",
            contentTitles: [
              {
                title: "Ualá",
                href: "/"
              },
              {
                title: " Lemoncash",
                href: "/"
              }
            ]
          }}
        />
        <SmallScreenNavbarItem
          data={{
            mainTitle: "Noticias",
          }}
        />
        <SmallScreenNavbarItem
          data={{
            mainTitle: "Contacto",
          }}
        />
      </div>
    </nav>
  )
}