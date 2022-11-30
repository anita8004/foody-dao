import type { NextPage } from 'next'
import styles from '@/styles/CommentsAdd.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search: NextPage = () => {
  return (
    <div className='main-page'>
      <div className={styles.commentsAdd}>
        <header>
          <Button variant='light'>{"<"} Back</Button>
          <h2>Add Comment</h2>
        </header>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control type='textarea'></Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Search;