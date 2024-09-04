import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "react-bootstrap/Collapse";

function MapComponent({ result }) {
  const defaultUrl = "https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default";

  const [url, setUrl] = useState("");
  const [openStates, setOpenStates] = useState([]); // Array to manage open state for each card

  let count = 1;

  useEffect(() => {
    if (isEmpty(result)) {
      setUrl(defaultUrl);
    } else {
      setUrl(
        `${defaultUrl}&zoomLevel=15&marker=postalcode:${result.startPostal}!colour:red!rType:${result.transportMode}!rDest:${result.endLat},${result.endLong}&marker=postalcode:${result.endPostal}!colour:darkblue&popupWidth=200`
      );
    }

    // Initialize open state array when results are loaded
    if (result.route?.length) {
      setOpenStates(Array(result.route.length).fill(false));
    }
  }, [result]);

  const handleToggle = (index) => {
    setOpenStates((prevOpenStates) => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = !newOpenStates[index]; // Toggle the state for the specific index
      return newOpenStates;
    });
  };

  return (
    <Container fluid>
      <Row className="g-4">
        <Col lg={6}>
          <iframe
            title="map"
            src={url}
            height="450"
            width="100%"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </Col>
        <Col lg={6}>
          {result.route?.length > 0 &&
            result.route.map((item, index) => (
              <React.Fragment key={index}> {/* Use index as a unique key */}
                <p>Route {count++}</p>
                <Row className="g-2">
                  <Col>
                    <Card>
                      <CardActionArea
                        onClick={() => handleToggle(index)} // Toggle specific card
                        aria-controls={`route_details_${index}`}
                        aria-expanded={openStates[index]}
                      >
                        <CardContent>
                          <Row>
                            <Col>
                              <p>Fare: {item.fare}</p>
                            </Col>
                            <Col>
                              <p>Duration: {parseInt(item.duration / 60)} mins</p>
                            </Col>
                            <Col>
                              <p>Transfers: {item.transfers}</p>
                            </Col>
                          </Row>
                          <Collapse in={openStates[index]}>
                            <div id={`route_details_${index}`}>
                              <Row>
                                <Col>
                                  <p>From</p>
                                </Col>
                                <Col>
                                  <p>To</p>
                                </Col>
                                <Col>Via</Col>
                                <Col>Bus No./ MRT</Col>
                              </Row>
                              {item.legs?.length > 0 &&
                                item.legs.map((details, legIndex) => (
                                  <Row key={legIndex}>
                                    <Col>
                                      <p>{details.from.name}</p>
                                    </Col>
                                    <Col>
                                      <p>{details.to.name}</p>
                                    </Col>
                                    <Col>{details.mode}</Col>
                                    <Col>{details.route}</Col>
                                  </Row>
                                ))}
                            </div>
                          </Collapse>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Col>
                </Row>
              </React.Fragment>
            ))}
        </Col>
      </Row>
    </Container>
  );
}

MapComponent.propTypes = {
  result: PropTypes.object.isRequired,
};

export default MapComponent;
