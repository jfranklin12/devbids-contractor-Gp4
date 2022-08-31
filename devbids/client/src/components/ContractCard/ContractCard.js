import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./ContractCard.css";
import React from "react";

function ContractCard() {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title style={{ color: "#5b57db", fontSize: "27px" }}>
          Job Title:
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Skills Required:
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Price Range:
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Completion Date:
        </Card.Subtitle>
        <Card.Text style={{ color: "#5b57db", fontSize: "18px" }}>
          Job Description:
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          Published by:
        </Card.Subtitle>
        <Button variant="primary" type="submit">
          Place a Bid!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContractCard;
