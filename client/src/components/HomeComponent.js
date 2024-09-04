import React from "react";
import Container from "react-bootstrap/Container";

import MapRoute from "./mapRoute";
import ReactDOM from "react-dom/client";

function HomeComponent() {
  return (
    <Container>
      <div>
        <h1>Welcome to NavigateSG</h1>
        <p>Key in the location to get started.</p>
      </div>

      <MapRoute />
    </Container>
  );
}

export default HomeComponent;
