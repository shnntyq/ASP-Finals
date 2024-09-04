import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./FAQComponent.css"; // Import the CSS file for custom styles

const FAQComponent = () => {
  // Array of FAQs for better scalability and management
  const faqs = [
    {
      question: "How does NavigateSG calculate travel times?",
      answer:
        "NavigateSG uses real-time traffic data and train schedules provided by an API from Singapore’s local transport authority. This data allows us to give you the most accurate and up-to-date travel time estimates.",
    },
    {
      question: "Is the information on NavigateSG always up to date?",
      answer:
        "Yes, we continuously update our information using live data from the local transport website. This ensures that you receive the latest traffic conditions and train schedules when planning your journey.",
    },
    {
      question:
        "Can I use NavigateSG to plan my journey across multiple modes of transport?",
      answer:
        "Absolutely! NavigateSG provides route options that may include a combination of buses, trains, and walking routes, helping you choose the best way to reach your destination.",
    },
    {
      question: "Does NavigateSG cover all areas in Singapore?",
      answer:
        "Yes, NavigateSG covers all areas within Singapore, offering comprehensive navigation assistance whether you're traveling in the city center or to more remote neighborhoods.",
    },
    {
      question: "How accurate are the estimated travel times on NavigateSG?",
      answer:
        "While we strive for high accuracy by using real-time data, actual travel times may vary due to unforeseen circumstances like sudden traffic jams or train service disruptions. We recommend allowing some extra time for your journey.",
    },
    {
      question: "Do I need to sign up to use NavigateSG?",
      answer:
        "No, you can use NavigateSG without signing up. However, creating an account allows you to save your favorite routes, set up notifications for delays, and receive personalized travel suggestions.",
    },
    {
      question: "How do I use the MRT Map?",
      answer:
        "Select a map from the dropdown menu to view different MRT lines.",
    },
    {
      question: "How does NavigateSG work?",
      answer:
        "Headed to town? Just input the address that you need to go to, and NavigateSG will show you the way! Input your destination in our Search bar and check latest traffic conditions in our traffic tab.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div className="faq-header">
        <h2>FAQ</h2>
        <p>We answer some of the most commonly asked questions here!</p>
      </div>
      <Row style={{ paddingBottom: "3rem"}}>
        {faqs.map((faq, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="faq-card">
              <Card.Body>
                <Card.Title>{faq.question}</Card.Title>
                <Card.Text>{faq.answer}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <p>If you need further assistance, please contact our support team via the contact form.</p>
    </div>
  );
};

export default FAQComponent;
