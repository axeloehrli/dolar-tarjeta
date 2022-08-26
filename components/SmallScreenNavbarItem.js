import Link from "next/link"
import styles from "../styles/SmallScreenNavbarItem.module.css"

export default function SmallScreenNavbarItem({ data, toggle }) {
  return (
    <div className={styles.navbarItem}>
      <div className={styles.navbarItemMain}>
        <p>{data.mainTitle}</p>
      </div>
      {data.contentTitles &&
        <div className={styles.navbarItemContent}>
          {data.contentTitles.map(e =>
            <Link href={e.href} key={e.title} >
              <p onClick={toggle}>{e.title} {"->"}</p>
            </Link>
          )}
        </div>
      }
    </div>
  )
} 