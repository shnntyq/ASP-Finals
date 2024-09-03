import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const url = "http://localhost:3001/";
  const [data, setData] = useState({
    curr_location: "",
    dest_location: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log(data);
    axios.post(url, { loc: data });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

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
