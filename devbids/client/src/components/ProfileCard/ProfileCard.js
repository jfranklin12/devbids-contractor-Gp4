import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProfileCard() {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Header className="text-center" style={{ color: "black" }}>
        Profile
      </Card.Header>
      <ListGroup variant="flush" style={{ color: "black" }}>
        <ListGroup.Item>First Name:</ListGroup.Item>
        <ListGroup.Item>Last Name:</ListGroup.Item>
        <ListGroup.Item>Username:</ListGroup.Item>
        <ListGroup.Item>Email:</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ProfileCard;
