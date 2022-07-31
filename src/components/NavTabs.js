import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavTabs;
