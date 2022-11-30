import styles from '../styles/Comment.module.scss'
import Image from 'react-bootstrap/Image'
import { useRouter } from 'next/router'

const RestaurantComment = () => {
  const router = useRouter();
  return (
    <div className={styles.commentCard} onClick={() => router.push("/comments/1")}>
      <Image className={styles.commentCardImage} src="https://fakeimg.pl/100/" alt="" width={50} height={50} roundedCircle />
      <div className={styles.commentCardText}>
        <h3 className={styles.commentCardTitle}>Title</h3>
        <p className={styles.commentCardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sequi! Odit obcaecati suscipit facilis ullam iusto, quae quas nam blanditiis veritatis voluptas nisi id veniam fugiat. Inventore, optio consequuntur. Nostrum?</p>
      </div>
    </div>
  )
}

export default RestaurantComment