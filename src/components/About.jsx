import { PERSONAL } from '../data'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrap}>
        <div className={styles.grid}>

          {/* Left column */}
          <div>
            <p className="sec-label">About Me</p>
            <h2 className="sec-title">Developer who cares about the whole picture</h2>
            <div className="sec-rule" />
            <div className={styles.stats}>
              {PERSONAL.stats.map(({ n, label }) => (
                <div className={styles.stat} key={label}>
                  <div className={styles.statN}>{n}</div>
                  <div className={styles.statL}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className={styles.body}>
            {PERSONAL.about.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
