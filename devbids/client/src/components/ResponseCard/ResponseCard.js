import "./ResponseCard.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import React from "react";

export default function ResponseCard() {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title
          style={{ color: "#97DB4F", fontSize: "30px", fontWeight: "bold" }}
        >
          You have a response!
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Price Offer:
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Completion Date:
        </Card.Subtitle>
        <Card.Text style={{ color: "#5b57db", fontSize: "18px" }}>
          Response Description:
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          Bid Placed By:
        </Card.Subtitle>

        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          LinkedIn:
        </Card.Subtitle>
        <Button type="submit" className="accept-button">
          Accept Bid!
        </Button>
      </Card.Body>
    </Card>
  );
}
