import React from "react";

function HelpComponent() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Help & Support</h2>
      <p>
        Welcome to the Help section! Here you can find answers to common
        questions and guides on how to use the website.
      </p>
      <ul>
        <li>
          <strong>How to Use the MRT Map:</strong> Select a map from the
          dropdown menu to view different MRT lines.
        </li>
        <li>
          <strong>Traffic Information:</strong> Navigate to the Traffic section
          to see real-time traffic updates.
        </li>
        <li>
          <strong>Contact Support:</strong> If you need further assistance,
          please contact our support team via the contact form.
        </li>
      </ul>
    </div>
  );
}

export default HelpComponent;
