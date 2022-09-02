import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../../utils/mutations'

import Auth from '../../utils/auth'

export function LoginForm() {
  // make state to remember what they type in forms
  const [userFormData, setUserFormData] = useState({})
  const [validated] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  // write function that is called when you press login
  const [login, { error }] = useMutation(LOGIN)

  useEffect(() => {
    if (error) {
      setShowAlert(true)
    } else {
      setShowAlert(false)
    }
  }, [error])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    try {
      console.log('here in frontend')
      const res = await login({ variables: { ...userFormData } })
      console.log(res)

      Auth.login(res.data.login.token, res.data.login.user)
    } catch (err) {
      console.error(err)
      setShowAlert(true)
    }

    setUserFormData({
      email: '',
      password: '',
    })
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <div>Welcome Back! Log in below!</div>
      <Alert
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="danger"
      >
        Invalid email or password!
      </Alert>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        />
        <Form.Control.Feedback type="invalid">
          Email is required!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Your password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
        />
        <Form.Control.Feedback type="invalid">
          Password is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        disabled={!(userFormData.email && userFormData.password)}
        type="submit"
      >
        Log In
      </Button>
    </Form>
  )
}
