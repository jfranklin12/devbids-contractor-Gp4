import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ResponseToContract from "../ResponseToContract/ResponseToContract";
import { useQuery } from "@apollo/client";
import "./ContractCard.css";

import { QUERY_CONTRACTS } from "../../utils/queries";


export default function ContractCard({
  title,
  price,
  contractDate,
  description,
  username,
}) {

  const [contractBid, setContractBid] = useState("inactive");

  const responseHandler = () => {
    console.log();
    setContractBid("active");
  };

  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title style={{ color: "#5b57db", fontSize: "27px" }}>
          Job Title: {title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Skills Required:
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Price Range: ${price}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Completion Date: {contractDate}
        </Card.Subtitle>
        <Card.Text style={{ color: "#5b57db", fontSize: "18px" }}>
          Job Description: {description}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
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
