import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProfileCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header className="text-center">Profile</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>First Name:</ListGroup.Item>
        <ListGroup.Item>Last Name:</ListGroup.Item>
        <ListGroup.Item>Username:</ListGroup.Item>
        <ListGroup.Item>Email:</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ProfileCard;
