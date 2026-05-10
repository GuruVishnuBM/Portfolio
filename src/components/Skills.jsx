import { useState, useEffect, useRef } from 'react'
import { SKILLS } from '../data'
import styles from './Skills.module.css'

function SkillBar({ name, pct }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(pct) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div className={styles.skillItem} ref={ref}>
      <span className={styles.skillName}>{name}</span>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${width}%` }} />
      </div>
      <span className={styles.pct}>{pct}%</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <p className="sec-label">Expertise</p>
        <h2 className="sec-title">Skills & technologies</h2>
        <div className="sec-rule" />
        <div className={styles.cols}>
          {SKILLS.map(({ group, items }) => (
            <div className={styles.group} key={group}>
              <h4 className={styles.groupTitle}>{group}</h4>
              <div className={styles.list}>
                {items.map((s) => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
