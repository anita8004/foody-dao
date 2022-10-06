import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Header = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Foody Dao</Navbar.Brand>
        <Row className='justify-content-center'>
          <InputGroup>
            <InputGroup.Text>
            <span className="material-icons">search</span>
            </InputGroup.Text>
            <Form.Control
              placeholder='Search'
              aria-label='Search'
              aria-describedby='search restaurant'
            />
          </InputGroup>
        </Row>
        <div>Connect Wallet</div>
      </Container>
    </Navbar>
  )
}

export default Header