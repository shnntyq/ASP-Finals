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

  // Function to determine the style based on the traffic incident type
  const getIncidentStyle = (type) => {
    switch (type) {
      case "Accident":
        return { backgroundColor: "#f8d7da", border: "1px solid #f5c6cb", color: "#721c24" };
      case "Roadwork":
        return { backgroundColor: "#fff3cd", border: "1px solid #ffeeba", color: "#856404" };
      case "Heavy Traffic":
        return { backgroundColor: "#d1ecf1", border: "1px solid #bee5eb", color: "#0c5460" };
      case "Closure":
        return { backgroundColor: "#d4edda", border: "1px solid #c3e6cb", color: "#155724" };
      default:
        return { backgroundColor: "#e2e3e5", border: "1px solid #d6d8db", color: "#383d41" };
    }
  };

  return (
    <Container style={{ paddingBottom: "3rem" }}>
      <div>
        <h1>Traffic Information</h1>
        <p>Real-time traffic updates will be shown here.</p>

        {data.value?.map((item, index) => (
          <div
            key={index} // Ensure unique key
            style={{
              ...getIncidentStyle(item.Type), // Apply dynamic styles
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            <strong>{index}:</strong> {item.Type}: {item.Message}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default TrafficComponent;
