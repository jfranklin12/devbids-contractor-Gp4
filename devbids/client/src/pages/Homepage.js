import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import SearchBar from "../components/SearchBar/SearchBar"
// import Auth from '../utils/auth';

const Homepage = () => {
    const [loading, data] = useQuery([]);

return (
    <>
        <Jumbotron fluid className='text-light bg-secondary'>
            <Container>
                <h1>Let's get working.</h1>
                <SearchBar></SearchBar>
            </Container>
        </Jumbotron>
        <Container>
        </Container>

    </>
    );
};

export default Homepage;