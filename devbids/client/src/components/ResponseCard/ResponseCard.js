import "./ResponseCard.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import React from "react";

function ResponseCard() {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title
          style={{ color: "#97DB4F", fontSize: "30px", fontWeight: "bold" }}
        >
          You have a response!
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Price Offer: $700
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Completion Date: 8/31/22
        </Card.Subtitle>
        <Card.Text style={{ color: "#5b57db", fontSize: "18px" }}>
          Description: I have 5 years experience with React. I will be able to
          complete the homepage, blah blah blah, quickly blah blah blah
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          Bid Placed By: vince456
        </Card.Subtitle>

        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          LinkedIn: vince456@linkedin.com
        </Card.Subtitle>
        <Button type="submit" className="accept-button">
          Accept Bid!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ResponseCard;
