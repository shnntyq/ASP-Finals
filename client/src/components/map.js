import Container from "react-bootstrap/Container";

function MapComponent() {
  return (
    <Container>
      <iframe
        src="https://www.onemap.gov.sg/minimap/minimap.html?mapStyle=Default&zoomLevel=15"
        height="480"
        width="50%"
        scrolling="no"
        frameborder="0"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </Container>
  );
}

export default MapComponent;
