import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SiCodeigniter } from "react-icons/si";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar className="" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center" href="#">
          <SiCodeigniter className="fs-3 nav-icon-color"></SiCodeigniter>
          <h5 className=" text-white p-0 m-0 mt-1">Learn Free Code</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 fw-bold "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-white nav-link" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#action2">
              Categories
            </Nav.Link>
            <Nav.Link className="text-white" href="#action2">
              Support
            </Nav.Link>
            <Nav.Link className="text-white" href="#action2">
              Blogs
            </Nav.Link>
            <Nav.Link className="text-white" href="#action2">
              Doc
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
