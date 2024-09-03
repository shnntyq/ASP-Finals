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
  const [open, setOpen] = useState(false);

  let count = 1;

  useEffect(() => {
    if (isEmpty(result)) {
      setUrl(defaultUrl);
    } else {
      setUrl(
        `${defaultUrl}&zoomLevel=15&marker=postalcode:${result.startPostal}!colour:red!rType:${result.transportMode}!rDest:${result.endLat},${result.endLong}&marker=postalcode:${result.endPostal}!colour:darkblue&popupWidth=200`
      );
    }
  }, [result]);

  return (
    <Container fluid> {/* Changed to fluid to use full width */}
      <Row className="g-4"> {/* Added g-4 for consistent spacing */}
        <Col lg={6}> {/* Adjusted columns for better distribution */}
          <iframe
            title="map"
            src={url}
            height="450"
            width="100%"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </Col>
        <Col lg={6}> {/* Adjusted columns for better distribution */}
          {result.route?.length > 0 &&
            result.route.map((item) => (
              <React.Fragment key={count}> {/* Added unique key */}
                <p>Route {count++}</p>
                <Row className="g-2"> {/* Added g-2 for spacing between cards */}
                  <Col> {/* Added Col for uniform card layout */}
                    <Card>
                      <CardActionArea
                        onClick={() => setOpen(!open)}
                        aria-controls="route_details"
                        aria-expanded={open}
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
                              </Row>
                              {item.legs?.length > 0 &&
                                item.legs.map((details, index) => (
                                  <Row key={index}> {/* Added unique key for each leg */}
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
