import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavbarItem.css'

function NavbarItem() {

  return (
    <div>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <Link to={'/'} className='nav-link'>Home</Link>
            <Link to={'/users data'} className='nav-link'>Users Data</Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarItem;