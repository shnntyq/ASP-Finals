import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

function TrafficComponent() {
  const url = "http://localhost:3001/traffic/getTrafficIncidents";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data.value);

  return (
    <Container>
      <div>
        <h1>Traffic Information</h1>
        <p>Real-time traffic updates will be shown here.</p>

        {data.value?.map((item, index) => (
          <p key="">
            {index}: {item.Type}: {item.Message}
          </p>
        ))}
      </div>
    </Container>
  );
}

export default TrafficComponent;
