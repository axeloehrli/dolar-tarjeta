import Header from "./Header"
import styles from "../styles/Layout.module.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout