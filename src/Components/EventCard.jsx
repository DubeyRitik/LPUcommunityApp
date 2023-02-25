import React from 'react'
import styles from '../CSS Modules/EventCard.module.css'
const EventCard = () => {
  return (
    <div className={styles.AllCards}>
        <div className={styles.IndCard}>
            <img src="https://www.lpu.in/campus_life/images/campus-events/hindi.jpg"/>
            </div>
            <div className={styles.Content}>
            <h5>LPU ORGANISED ''HINDI HAIN HUM" EVENT ON THE OCCASION OF 'HINDI DIWAS'</h5>
            <p>The celebration witnessed the elite presence of renowned authors, speakers and poets. The event mesmerized all students and staff members with an ancient storytelling art form ‘Dastangoi’. The story telling about “Rajkumari Chauboli” was applauded by all.</p>
            </div>
    </div>
  )
}

export default EventCard
