import "./ContractDetails.css";
import React from "react";
import { Card, Col } from "react-bootstrap";

export default function ContractDetails() {
  return (
  <>
    <Card className = "contractDetails">
      <Row>
        <Col.Card className = "workDetails" xs={12} md={9}>
        </Col.Card>
        <Col className="profilePic" xs={6} md={3}>
          <Image src="" roundedCircle/>
        </Col>
        <Col className="socials" xs={6} md ={3}></Col>
      </Row>
      
    </Card>
  </>
  );
}
