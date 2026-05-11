import { useState } from 'react'
import { PERSONAL } from '../data'
import styles from './Nav.module.css'

const NAV_LINKS = ["About", "Projects", "Skills", "Contact"]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div
          className={styles.logo}
          role="button"
          tabIndex={0}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          {PERSONAL.name}
        </div>

        <button
          className={styles.menuButton}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map((n) => (
            <li key={n}>
              <a
                href={`#${n.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(n.toLowerCase())
                  setMenuOpen(false)
                }}
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
