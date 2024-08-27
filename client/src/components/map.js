import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";

function MapComponent({ result }) {
  const defaultUrl = "https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default";

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (isEmpty(result)) {
      setUrl(defaultUrl);
    } else {
      setUrl(
        `${defaultUrl}&zoomLevel=15&marker=postalcode:${result.startPostal}!colour:red!rType:TRANSIT!rDest:${result.endLat},${result.endLong}&marker=postalcode:${result.endPostal}!colour:darkblue&popupWidth=200`
      );
    }
  }, [result]);
  return (
    <Container>
      <iframe
        title="map"
        src={url}
        height="450"
        width="50%"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </Container>
  );
}

MapComponent.propTypes = {
  result: PropTypes.object.isRequired,
};

export default MapComponent;
