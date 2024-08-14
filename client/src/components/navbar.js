import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";

function AppNavBar() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand as={Link} to="/">
            NavigateSG
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto flex-grow-1 justify-content-evenly">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>{" "}
              {/* Link to HomeComponent */}
              <Nav.Link as={Link} to="/traffic">
                Traffic
              </Nav.Link>{" "}
              {/* Link to TrafficComponent */}
              <NavDropdown title="MRT Map" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/map/east-west">
                  East-West
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/map/north-south">
                  North-South
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/map/north-east">
                  North-East
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/map/circle">
                  Circle
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/map/downtown">
                  Downtown
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/map/thomson-east-coast">
                  Thomson-East Coast
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/map/full">
                  Full Map
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/help">
                Help
              </Nav.Link>{" "}
              {/* Link to HelpComponent */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default AppNavBar;
