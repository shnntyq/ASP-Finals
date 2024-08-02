import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import MapComponent from "./MapComponent"; // Import the MapComponent

function AppNavBar() {
  const [selectedMap, setSelectedMap] = useState(null);

  return (
    <Container>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">NavigateSG</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto flex-grow-1 justify-content-evenly">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#traffic">Traffic</Nav.Link>

              <NavDropdown title="MRT Map" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setSelectedMap("3.1")}>
                  East-West
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setSelectedMap("3.2")}>
                  North-South
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setSelectedMap("3.3")}>
                  North-East
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setSelectedMap("3.4")}>
                  Circle
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setSelectedMap("3.5")}>
                  Downtown
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setSelectedMap("3.6")}>
                  Thomson-East Coast
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => setSelectedMap("3.7")}>
                  Full Map
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#help">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {selectedMap && <MapComponent mapId={selectedMap} />}{" "}
      {/* Render the MapComponent based on the selected map */}
    </Container>
  );
}

export default AppNavBar;
