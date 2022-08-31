import "./ContractCard.css";
import Card from "react-bootstrap/Card";

function ContractCard() {
  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title style={{ color: "blue", fontSize: "25px" }}>
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
        <Card.Text style={{ fontSize: "18px" }}>
          Job Description: This is a blah blah blah blah job that requires blah
          blah blah. We need someone to blah blah blah and update blah blah
          blah. We need an experienced blah blah to work with blha blha blah.
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          Vendor Name: Mary Margaret Taylor
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          Phone: 678-678-6788
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          Email: taylor.marymargaret@gmail.com
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default ContractCard;
