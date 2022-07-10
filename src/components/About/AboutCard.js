import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fintof  Patel </span>
            from <span className="purple"> Bilimora, Gujarat.</span>
            <br />I am a  pursuing Bachelor of Engineering in Information and Technology in Vishwakarma Govt Engineering college Ahemdabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
               Playing Cricket
            </li>
            <li className="about-activity">
              Paintings
            </li>
            <li className="about-activity">
               Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Painting is self-discovery. Every good artist paints what he is!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;