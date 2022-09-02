import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function ProfileCard() {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
      <Card style={{ width: '85%' }}>
        <Card.Header className="text-center" style={{ color: 'black' }}>
          Profile
        </Card.Header>
        <ListGroup variant="flush" style={{ color: 'black' }}>
          <ListGroup.Item>First Name: {user.firstName}</ListGroup.Item>
          <ListGroup.Item>Last Name: {user.lastName}</ListGroup.Item>
          <ListGroup.Item>Username: {user.username}</ListGroup.Item>
          <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        </ListGroup>
      </Card>
  )
}

export default ProfileCard
