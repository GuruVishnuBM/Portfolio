import { EXPERIENCE } from './data'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.wrap}>
        <p className="sec-label">Professional Journey</p>
        <h2 className="sec-title">Work Experience</h2>
        <div className="sec-rule" />

        <div className={styles.timeline}>
          {EXPERIENCE.map((exp, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.dot} />

              <div className={styles.top}>
                <div className={styles.role}>{exp.role}</div>
                <span className={styles.duration}>{exp.from} — {exp.to}</span>
              </div>

              <div className={styles.meta}>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.sep}>·</span>
                <span className={styles.location}>{exp.location}</span>
                <span className={styles.sep}>·</span>
                <span className={styles.type}>{exp.type}</span>
              </div>

              {exp.team && (
                <div className={styles.team}>
                  Team: {exp.team} {exp.domain && `· ${exp.domain}`}
                </div>
              )}

              <ul className={styles.points}>
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>

              <div className={styles.tags}>
                {exp.stack.map((s) => (
                  <span className={styles.tag} key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
