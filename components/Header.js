import Image from "next/image"
import styles from "../styles/Header.module.css"
import MenuIcon from "../public/menu.svg"
import { useState, useEffect } from "react"
import MenuData from "../MenuData"
import Link from "next/link"
import NavbarItem from "./NavbarItem"


export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const onMenuClick = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.h2}>Dólar tarjeta</h2>
        <Image className={styles.image} width={30} height={30} src={MenuIcon} alt="menu" onClick={onMenuClick} />
        <div className={showMenu ? styles.navbarContainerActive : styles.navbarContainer} >
          <div className={styles.navbarMask} onClick={onMenuClick}>

          </div>
          <nav className={styles.navbar}>
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
                    href: "/dolar-blue"
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
                    href: "/"
                  },
                  {
                    title: "Plazo fijo Banco Provincia",
                    href: "/"
                  }
                ]
              }}
            />
            <NavbarItem
              data={{
                mainTitle: "Tarjetas",
                contentTitles: [
                  {
                    title: "Ualá",
                    href: "/"
                  },
                  {
                    title: "Lemoncash",
                    href: "/"
                  }
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
              noBorder
            />
          </nav>
        </div>
      </div>
    </header>
  )
}