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

function Appbar() {
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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Product</Nav.Link>
                <Nav.Link href="#action2">Blog</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
