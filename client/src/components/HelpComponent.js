import React from "react";
import Container from "react-bootstrap/Container";

function HelpComponent() {
  return (
    <Container>
      <div style={{ padding: "20px" }}>
        <h2>FAQ</h2>
        <p>
          We answer some of the most commonly asked questions here!
        </p>
        <ul>
          <li>
            <strong>How does NavigateSG calculate travel times?</strong> 
            <br></br>NavigateSG uses real-time traffic data and train schedules provided by an API from Singapore’s local transport authority. This data allows us to give you the most accurate and up-to-date travel time estimates.
          </li>
          <li>
            <strong>Is the information on NavigateSG always up to date?</strong> 
            <br></br>Yes, we continuously update our information using live data from the local transport website. This ensures that you receive the latest traffic conditions and train schedules when planning your journey.
          </li>
          <li>
            <strong>Can I use NavigateSG to plan my journey across multiple modes of transport?</strong> 
            <br></br>Absolutely! NavigateSG provides route options that may include a combination of buses, trains, and walking routes, helping you choose the best way to reach your destination.
          </li>
          <li>
            <strong>Does NavigateSG cover all areas in Singapore?</strong> 
            <br></br>Yes, NavigateSG covers all areas within Singapore, offering comprehensive navigation assistance whether you're traveling in the city center or to more remote neighborhoods.
          </li>
          <li>
            <strong>How accurate are the estimated travel times on NavigateSG?</strong> 
            <br></br>While we strive for high accuracy by using real-time data, actual travel times may vary due to unforeseen circumstances like sudden traffic jams or train service disruptions. We recommend allowing some extra time for your journey.
          </li>
          <li>
            <strong>Do I need to sign up to use NavigateSG?</strong> 
            <br></br>No, you can use NavigateSG without signing up. However, creating an account allows you to save your favorite routes, set up notifications for delays, and receive personalized travel suggestions.
          </li>
          <li>
            <strong>How do I use the MRT Map?</strong> 
            <br></br>Select a map from the
            dropdown menu to view different MRT lines.
          </li>
        </ul>
        <p>
        If you need further assistance,
        please contact our support team via the contact form.
        </p>
      </div>
    </Container>

  );
}

export default HelpComponent;
