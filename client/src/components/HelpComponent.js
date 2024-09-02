import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"

function HelpComponent() {
  return (
    <Container style={{ maxWidth: "100%", padding: "0" }}>
      {/* TOP PORTION */}
      <div
        style={{
          display: "flex", // Enables flexbox layout
          justifyContent: "center", // Space between cards
          width: "100vw", // Full viewport width
          padding: "0 20px", // Optional: Adds some space on the sides
          marginBottom: "2.5vw",
        }}
      >
        <Card style={{ width: "90%" }}>
          <Card.Body>
            <Card.Title>Help & Support</Card.Title>
            <Card.Text className="d-flex align-items-center justify-content-between">
              Welcome to the Help section! Here you can find answers to common
              questions and guides on how to use the website.
              <Col className="d-flex justify-content-end">
                <Button as={Link} to="/faq" variant="primary" classname="ms-3"
                style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px", }}
                >
                  See Questions
                </Button>
              </Col>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/* MID PORTION */}
      <div
        style={{
          display: "flex", // Enables flexbox layout
          justifyContent: "space-between", // Space between cards
          width: "100vw", // Full viewport width
          padding: "0 20px", // Optional: Adds some space on the sides
        }}
      >
        {/* Left-Aligned Card */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end", // Pushes the card to the right within this div
            width: "50vw", // 50% of the viewport width
            marginRight: "2.5vw",
          }}
        >
          <Card style={{ width: "90%" }}>
            {" "}
            {/* Card takes 90% of its container (50vw) */}
            <Card.Body>
              <Card.Title>Traffic Information:</Card.Title>
              <Card.Text className="d-flex align-items-center justify-content-between">
                See real-time traffic updates with just one click.
                <Col className="d-flex justify-content-end">
                  <Button as={Link} to="/traffic" variant="primary" classname="ms-3"
                  style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px",}}
                  >
                    Traffic Conditions
                  </Button>
                </Col>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Right-Aligned Card */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start", // Pushes the card to the left within this div
            width: "50vw", // 50% of the viewport width
          }}
        >
          <Card style={{ width: "90%" }}>
            {" "}
            {/* Card takes 90% of its container (50vw) */}
            <Card.Body>
              <Card.Title>How to Use the MRT Map:</Card.Title>
              <Card.Text className="d-flex align-items-center justify-content-between">
                View the map of the MRT lines or view specific lines to find your
                destination.
                <Col className="d-flex justify-content-end">
                  <Button as={Link} to="/map/full" variant="primary" classname="ms-3"
                  style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px",}}
                  >
                    Full Map
                  </Button>
                </Col>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>  
      </div>
    </Container>
  );
}

export default HelpComponent;
