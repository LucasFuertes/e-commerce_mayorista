import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={'/'}>
          <Navbar.Brand>Mayorista "Miraflores"</Navbar.Brand>
        </Link>
        <Nav>
          <NavLink className="nav-link" to={'categoria/cotillon'}>Cotillon</NavLink>
          <NavLink className="nav-link" to={'categoria/galletas'}>Galletitería</NavLink>
          <NavLink className="nav-link" to={'categoria/escolar'}>Útiles escolares</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
