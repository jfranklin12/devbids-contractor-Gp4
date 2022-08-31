import "./ContractCard.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function ContractCard() {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title style={{ color: "#5b57db", fontSize: "25px" }}>
          Job Title: Style Homepage for Theater Company
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Skills Required: React
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Price Range: $500
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Completion By: 8/31/22
        </Card.Subtitle>
        <Card.Text style={{ color: "#5b57db", fontSize: "18px" }}>
          Job Description: This is a blah blah blah blah job that requires blah
          blah blah. We need someone to blah blah blah and update blah blah
          blah. We need an experienced blah blah to work with blha blha blah.
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          Published: mm43678
        </Card.Subtitle>
        <Button variant="primary" type="submit">
          Place a Bid!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContractCard;
