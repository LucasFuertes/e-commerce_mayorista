import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mayorista "Miraflores"</Navbar.Brand>
        <Nav>
          <Nav.Link href="#primary">Cotillon</Nav.Link>
          <Nav.Link href="#secondary">Galletitería</Nav.Link>
          <Nav.Link href="#terciary">Útiles escolares</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
