import React, { useState, useEffect } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import { useMutation } from '@apollo/client'; 
import './SearchBar.css'

const SearchBar = () => {

    // const [userSearch, setUserSearch] = useState([]);
    // const [searchInput, setSearchInput] = useState('');

    // const [login, { error }] = useMutation([])
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const url  = `localhost`
    //         const query = `${url}${searchInput}`

    //         const response = await fetch(query)


    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

return (
    <>
    <Form onSubmit={{/*handleFormSubmit*/}}>
        <Form.Row>
            <Col xs={12} md={8}>
                <Form.Control
                    name = 'userSearch'
                    // value = {userSearch}
                    // onChange = {(e) => setUserSearch(e.target.value)}
                    type = 'text'
                    size = 'lg'
                    placeholder = 'Example: React'
                    />
            </Col>
            <Col xs={12} md={4}>
                <Button type='submit' size='lg'>
                    Search
                </Button>
            </Col>
        </Form.Row>
    </Form>
    </>
);
};

export default SearchBar;