import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";

function AppNavBar() {
  return (
    <Container>
      <Container>
        <Navbar.Brand href="#home">NavigateSG</Navbar.Brand>
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#traffic">Traffic</Nav.Link>

              <NavDropdown title="MRT Map" id="basic-nav-dropdown">
                <NavDropdown.Item href="#map/3.1">East-West</NavDropdown.Item>
                <NavDropdown.Item href="#map/3.2">North-South</NavDropdown.Item>
                <NavDropdown.Item href="#map/3.3">North-East</NavDropdown.Item>
                <NavDropdown.Item href="#map/3.4">Circle</NavDropdown.Item>
                <NavDropdown.Item href="#map/3.5">Downtown</NavDropdown.Item>
                <NavDropdown.Item href="#map/3.6">
                  Thomson-East Coast
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#map/3.7">Full Map</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#traffic">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default AppNavBar;
