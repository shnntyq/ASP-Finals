import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlipComponent from "./FlipCardComponent";
import { useMediaQuery } from "react-responsive";

function MapComponent({ result }) {
  const isLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
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
      {isLaptop ? (
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
      ) : (
        <>
          <Row>
            <iframe
              title="map"
              src={url}
              height="450"
              width="100%"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </Row>
          <Row>
            {result.route?.length > 0 &&
              result.route.map((item, index) => (
                <FlipComponent item={item} index={index} key="" />
              ))}
          </Row>
        </>
      )}
    </Container>
  );
}

MapComponent.propTypes = {
  result: PropTypes.object.isRequired,
};

export default MapComponent;
