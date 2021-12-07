import React from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useUserContext } from "../admin/contextapi";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const { user, setUser } = useUserContext();

  const navigate = useNavigate();
  const logout = async () => {
    try {
      await setUser("");
      window.localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <Navbar className="nav_bg" expand={false} variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <h3 className="text-white">
              <Link className="nav-heading" to="/">
                Spring
              </Link>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Spring
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Product</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
                {user.access_level === "admin" ? (
                  <Nav.Link href="/admin">Admin Panel</Nav.Link>
                ) : (
                  ""
                )}

                {user.access_level === "user" ? (
                  <button onClick={logout}>Logout</button>
                ) : (
                  <Nav.Link href="/login">Login</Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
