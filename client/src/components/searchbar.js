import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import PropTypes from "prop-types";

function SearchBar({ data, submit, handle }) {
  return (
    <Container className="mt-4">
      <Form onSubmit={(e) => submit(e)}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Current Location"
              className=" mr-sm-2"
              id="curr_location"
              value={data.curr_location}
              onChange={(e) => handle(e)}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Destination"
              className=" mr-sm-2"
              id="dest_location"
              value={data.dest_location}
              onChange={(e) => handle(e)}
            />
          </Col>
          <Col>
            <Form.Select id="mode" onChange={(e) => handle(e)}>
              <option value="TRANSIT">TRANSIT</option>
              <option value="BUS">BUS</option>
              <option value="RAIL">RAIL</option>
            </Form.Select>
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

SearchBar.propTypes = {
  data: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  handle: PropTypes.func.isRequired,
};

export default SearchBar;
