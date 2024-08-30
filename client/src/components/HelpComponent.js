import React from "react";
import Container from "react-bootstrap/Container";

function HelpComponent() {
  return (

//        <Container>
//          <div style={{ padding: "20px" }}>
//            <h2>Help & Support</h2>
//            <p>
//              Welcome to the Help section! Here you can find answers to common
//              questions and guides on how to use the website.
//            </p>
//            <ul>
//              <li>
//                <strong>How to Use the MRT Map:</strong> Select a map from the
//                dropdown menu to view different MRT lines.
//              </li>
//              <li>
//                <strong>Traffic Information:</strong> Navigate to the Traffic
//                section to see real-time traffic updates.
//              </li>
//              <li>
//                <strong>Contact Support:</strong> If you need further assistance,
//                please contact our support team via the contact form.
//              </li>
//            </ul>
//          </div>
//        </Container>                  
    
       <Container style={{ maxWidth: '100%', padding: "0"}}>

      {/* TOP PORTION */}
      <div
          style={{
            display: "flex",          // Enables flexbox layout
            justifyContent: "center", // Space between cards
            width: "100vw",           // Full viewport width
            padding: "0 20px",         // Optional: Adds some space on the sides
            marginBottom: "2.5vw",
          }}
        >
          <Card style={{ width: '90%' }}> {/* Card takes 90% of its container (50vw) */}
              <Card.Body>
                <Card.Title>Help & Support</Card.Title>
                <Card.Text>
                Welcome to the Help section! Here you can find answers to common
                questions and guides on how to use the website.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>

      {/* MID PORTION */}
      <div
          style={{
            display: "flex",          // Enables flexbox layout
            justifyContent: "space-between", // Space between cards
            width: "100vw",           // Full viewport width
            padding: "0 20px"         // Optional: Adds some space on the sides
          }}
        >
          {/* Left-Aligned Card */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end", // Pushes the card to the right within this div
              width: "50vw",              // 50% of the viewport width
              marginRight: "2.5vw",
            }}
          >
            <Card style={{ width: '90%' }}> {/* Card takes 90% of its container (50vw) */}
              <Card.Body>
                <Card.Title>Traffic Information:</Card.Title>
                <Card.Text>
                See real-time traffic updates with just one click.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Right-Aligned Card */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start", // Pushes the card to the left within this div
              width: "50vw",               // 50% of the viewport width
            }}
          >
            <Card style={{ width: '90%' }}> {/* Card takes 90% of its container (50vw) */}
              <Card.Body>
                <Card.Title>How to Use the MRT Map:</Card.Title>
                <Card.Text>
                  View the map of the MRT lines or view specific lines to find ur destination.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

    </Container>

  );
}

export default HelpComponent;
