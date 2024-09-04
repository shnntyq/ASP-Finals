import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlipComponent from "./FlipCardComponent";

function MapComponent({ result }) {
  const defaultUrl = "https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default";

  const [url, setUrl] = useState("");

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
            result.route.map((item, index) => (
              <FlipComponent item={item} index={index} key="" />
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
