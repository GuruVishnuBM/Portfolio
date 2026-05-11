import { PERSONAL } from '../data'
import styles from './Nav.module.css'

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          Guru Vishnu<span className={styles.dot}> .</span>
        </div>
        <ul className={styles.links}>
          {NAV_LINKS.map((n) => (
            <li key={n}>
              <a
                href={`#${n.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollTo(n.toLowerCase()) }}
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
