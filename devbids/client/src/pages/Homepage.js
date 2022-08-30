import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
// import Auth from '../utils/auth';

const Homepage = () => {

    const [userSearch, setUserSearch] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const url  = `localhost`
            const query = `${url}${searchInput}`

            const response = await 


        } catch (err) {
            console.error(err);
        }
    }

return (
    <>
        <Jumbotron fluid className='text-light bg-secondary'>
            <Container>
                <h1>Let's get working.</h1>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Row>
                        <Col xs={12} md={8}>
                            <Form.Control
                                name = 'userSearch'
                                value = {userSearch}
                                onChange = {(e) => setUserSearch(e.target.value)}
                                type = 'text'
                                size = 'lg'
                                placeholder = 'Example: React Website Design'
                                />
                        </Col>
                        <Col xs={12} md={4}>
                            <Button type='submit' variant='success' size='lg'>
                                Search
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </Jumbotron>

        <Container>
            <Div>

            </Div>
        </Container>

    </>
    );
};

export default Homepage;