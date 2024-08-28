import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";

function AppNavBar() {
  return (
      <div style={{height: "100px"}}>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <div>
          <Container classname= "">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className= "mx-2">
                <Nav.Link as={Link} to="/" className= "mx-4">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/traffic" className= "mx-4">
                  Traffic
                </Nav.Link>

                <NavDropdown title="MRT Map" id="basic-nav-dropdown" className= "mx-4">
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
                <Nav.Link as={Link} to="/help" className= "mx-4">
                  Help
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
        
          <div style={{display: "flex", justifyContent: "flex-start", marginLeft: "auto",}}>
            <Container>
              <Navbar.Brand as={Link} to="/">
                NavigateSG
              </Navbar.Brand>
            </Container>
          </div>

        </Navbar>
      </div>
  );
}

export default AppNavBar;
