import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Fin you car</Navbar.Brand>
          <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
                     </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;