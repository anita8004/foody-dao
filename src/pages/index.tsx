import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import Comment from '@/components/comment'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.homeContent}>
        <div className={styles.homeContentText}>
          <div className="text-wrapper">
            <h2>Explore A <br/>Great <br/>Restaurant</h2>
            <p>Everyone can be Michelin judge</p>
          </div>
          <button>Explore Restaurant by Map</button>
        </div>
        <div className={styles.homeContentList}>
          <Comment/>
        </div>
      </div>
      <div className={styles.bgMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d544.3700686603115!2d120.71904646395606!3d24.249023027270827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691a05c7b90025%3A0xfb359f7286c533fa!2z5Zq06ZuqIOmbquiKseWGsOWwiOizo-W6lw!5e0!3m2!1szh-TW!2stw!4v1666603034025!5m2!1szh-TW!2stw" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Home
