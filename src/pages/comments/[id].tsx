import type { NextPage } from 'next'
import styles from '@/styles/CommentsById.module.scss'
import Comment from '@/components/comment'
import Button from 'react-bootstrap/Button';

const CommentsByID: NextPage = () => {
  const array = Array.from({length: 5});
  return (
    <div className='main-page'>
      <div className={styles.commentContent}>
        <div className={styles.commentContentMap}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d544.3700686603115!2d120.71904646395606!3d24.249023027270827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691a05c7b90025%3A0xfb359f7286c533fa!2z5Zq06ZuqIOmbquiKseWGsOWwiOizo-W6lw!5e0!3m2!1szh-TW!2stw!4v1666603034025!5m2!1szh-TW!2stw" width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={styles.commentContentInner}>
          <div className={styles.commentContentInnerHeader}>
            <h2>DIN TAI FUNG（Xinyi Branch）</h2>
            <ul>
              <li>
                <span>Total Star: 4.5</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">grade</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </li>
              <li>
                <span className="material-symbols-outlined">location_on</span>
                106台北市大安區信義路二段194號
              </li>
            </ul>
          </div>
          <div className={styles.commentsWrapper}>
            <div className={styles.commentsHeader}>
              <Button variant="light">Write Comment</Button>{' '}
            </div>
            <div className={styles.comments}>
              {array.map(item => (<Comment key={item}/>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsByID;