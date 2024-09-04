import React from "react";
import Container from "react-bootstrap/Container";

import MapRoute from "./mapRoute";

function HomeComponent() {
  return (
    <Container style={{ paddingBottom: "3rem" }}>
      <div>
        <h1>Welcome to NavigateSG</h1>
        <p>Key in the location to get started.</p>
      </div>

      <MapRoute />
    </Container>
  );
}

export default HomeComponent;
