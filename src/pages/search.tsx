import type { NextPage } from 'next'
import Comment from '@/components/comment'
import styles from '@/styles/Search.module.scss'

const Search: NextPage = () => {
  const array = Array.from({length: 5});
  return (
    <div className='main-page'>
      <div className={styles.searchList}>
        {array.map(item => (<Comment key={item}/>))}
      </div>
    </div>
  );
}

export default Search;