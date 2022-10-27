import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
        <Nav.Link href="#home">Домой</Nav.Link>
                     </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;