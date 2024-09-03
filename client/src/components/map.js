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

  function convertUnixTime(unixTime) {
    const dt = new Date(unixTime);
    const currTime = dt.getHours() + ":" + dt.getMinutes();

    return currTime;
  }

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
    <Container>
      <Row>
        <Col>
          <iframe
            title="map"
            src={url}
            height="450"
            width="100%"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </Col>
        <Col>
          {result.route?.length > 0 &&
            result.route.map((item) => (
              <>
                <p>Route {count++}</p>
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
                          <p key="">
                            Duration: {parseInt(item.duration / 60)} mins
                          </p>
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
                                      convertUnixTime(
                                        parseInt(details.from.arrival)
                                      )}
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
