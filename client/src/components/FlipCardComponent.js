import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "react-bootstrap/Collapse";
import PropTypes from "prop-types";

function FlipComponent({ item, index }) {
  const [open, setOpen] = useState(false);

  function convertUnixTime(unixTime) {
    const dt = new Date(unixTime);
    const currTime = dt.getHours() + ":" + dt.getMinutes();

    return currTime;
  }

  return (
    <>
      <p>Route {index + 1}</p>
      <Row>
        <Card>
          <CardActionArea
            onClick={() => setOpen(!open)}
            aria-controls="route_details"
            aria-expanded={open}
          >
            <CardContent>
              <Col>
                <p key="">Fare: {item.fare}</p>
              </Col>
              <Col>
                <p key="">Duration: {parseInt(item.duration / 60)} mins</p>
              </Col>
              <Col>
                <p key="">Transfers: {item.transfers}</p>
              </Col>
              <Collapse in={open}>
                <div id="route_details">
                  <Row key="">
                    <Col>
                      <p>From</p>
                    </Col>
                    <Col>
                      <p>To</p>
                    </Col>
                    <Col>Via</Col>
                    <Col>Bus No./ MRT</Col>
                    <Col>Time</Col>
                  </Row>
                  {item.legs?.length > 0 &&
                    item.legs.map((details) => (
                      <Row key="">
                        <Col>
                          <p>{details.from.name}</p>
                        </Col>
                        <Col>
                          <p>{details.to.name}</p>
                        </Col>
                        <Col>{details.mode}</Col>
                        <Col>{details.route}</Col>
                        <Col>
                          {details.route.length > 0 &&
                            convertUnixTime(parseInt(details.from.arrival))}
                        </Col>
                      </Row>
                    ))}
                </div>
              </Collapse>
            </CardContent>
          </CardActionArea>
        </Card>
      </Row>
    </>
  );
}

export default FlipComponent;
