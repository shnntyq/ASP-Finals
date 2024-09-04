import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import PropTypes from "prop-types";

function SearchBar({ data, submit, handle }) {
  return (
    <Container fluid className="mt-4"> {/* Use fluid container to utilize full width */}
      <Form onSubmit={(e) => submit(e)}>
        <Row className="g-3"> {/* Use g-3 for consistent spacing */}
          <Col xs={12} md={4}> {/* Takes full width on small screens, 1/3 on medium and up */}
            <Form.Control
              type="text"
              placeholder="Current Location"
              className="mr-sm-2"
              id="curr_location"
              value={data.curr_location}
              onChange={(e) => handle(e)}
            />
          </Col>
          <Col xs={12} md={4}> {/* Takes full width on small screens, 1/3 on medium and up */}
            <Form.Control
              type="text"
              placeholder="Destination"
              className="mr-sm-2"
              id="dest_location"
              value={data.dest_location}
              onChange={(e) => handle(e)}
            />
          </Col>
          <Col xs={12} md={2}> {/* Takes full width on small screens, smaller width on medium */}
            <Form.Select id="mode" onChange={(e) => handle(e)}>
              <option value="TRANSIT">TRANSIT</option>
              <option value="BUS">BUS</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={2}> {/* Button takes full width on smaller screens */}
            <Button type="submit" className="w-100"> {/* Ensure button is full width */}
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <div className="border-top my-3"></div>
    </Container>
  );
}

SearchBar.propTypes = {
  data: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  handle: PropTypes.func.isRequired,
};

export default SearchBar;
