import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ResponseToContract from "../ResponseToContract/ResponseToContract";
import { useQuery } from "@apollo/client";
import "./ContractCard.css";

import { QUERY_CONTRACTS } from "../../utils/queries";

export default function ContractCard() {
  const [contractBid, setContractBid] = useState("inactive");

  const { loading, data } = useQuery(QUERY_CONTRACTS);

  const contracts = data?.contracts || [];

  const responseHandler = () => {
    console.log(contracts);
    setContractBid("active");
  };

  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title style={{ color: "#5b57db", fontSize: "27px" }}>
          {/* Job Title: {contracts[0].title} */}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          Skills Required:
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          {/* Price Range: ${contracts[0].price} */}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "20px" }}>
          {/* Completion Date: {contracts[0].contractDate} */}
        </Card.Subtitle>
        <Card.Text style={{ color: "#5b57db", fontSize: "18px" }}>
          {/* Job Description: {contracts[0].description} */}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "18px" }}>
          {/* Published by: {contracts[0].username} */}
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
