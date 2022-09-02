import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ResponseToContract from "../ResponseToContract/ResponseToContract";
import { useQuery } from "@apollo/client";
import "./ContractCard.css";

export default function ContractCard({
  // Parameters that are mapped to the contract card from page the cards are to display on
  title,
  price,
  contractDate,
  description,
  username,
}) {
  // State to determine if the response section needs to display and if the make offer button needs to disappear
  const [contractBid, setContractBid] = useState("inactive");

  const responseHandler = () => {
    setContractBid("active");
  };

  // Card that is returned
  return (
    <Card  style={{ width: "95%" }}>
      <Card.Body className='contract-card'>
        <Card.Title className='contract-title' style={{ color: "#5b57db", fontSize: "27px" }}>
          Job Title: {title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted contract-subtitle" style={{ fontSize: "20px" }}>
          Skills Required:
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted contract-subtitle" style={{ fontSize: "20px" }}>
          Price Range: ${price}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted contract-subtitle" style={{ fontSize: "20px" }}>
          Date String: {contractDate}
        </Card.Subtitle>
        <Card.Text className="contract-description" style={{ color: "#5b57db", fontSize: "18px" }}>
          Job Description: {description}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted contract-subtitle" style={{ fontSize: "18px" }}>
          Published by: {username}
        </Card.Subtitle>
        {contractBid === "inactive" && (
          <Button onClick={responseHandler} variant="primary" type="submit">
            Place a Bid!
          </Button>
        )}
        {contractBid === "active" && <ResponseToContract />}
      </Card.Body>
      <div></div>
    </Card>
  );
}
