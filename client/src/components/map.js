import Container from "react-bootstrap/Container";
import Map from "react-map-gl/maplibre";

function MapComponent() {
  return (
    <Container>
      <Map
        maxBounds={[103.596, 1.1443, 104.1, 1.4835]}
        mapStyle="https://www.onemap.gov.sg/maps/json/raster/mbstyle/Grey.json"
        style={{ width: 600, height: 400 }}
        attributionControl={false}
      />
    </Container>
  );
}

export default MapComponent;
