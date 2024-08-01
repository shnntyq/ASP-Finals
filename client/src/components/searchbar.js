import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchBar() {
  return (
    <Container className="mt-4">
      <Form inline>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Current Location"
              className=" mr-sm-2"
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Destination"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
      <div className="border-top my-3"></div>
    </Container>
  );
}

export default SearchBar;
