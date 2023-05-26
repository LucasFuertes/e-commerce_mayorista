import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Link className="brand" to={"/"}>
          <Navbar.Brand>Mayorista "Miraflores"</Navbar.Brand>
        </Link>
        <NavbarToggle aria-controls="navbar-nav" />
        <NavbarCollapse className="position-nav-cart" id="navbar-nav">
          <Nav>
            <NavLink className="nav-link" to={"categoria/cotillon"}>
              Cotillon
            </NavLink>
            <NavLink className="nav-link" to={"categoria/galletas"}>
              Galletitería
            </NavLink>
            <NavLink className="nav-link" to={"categoria/escolar"}>
              Útiles escolares
            </NavLink>
          </Nav>
          <CartWidget />
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
