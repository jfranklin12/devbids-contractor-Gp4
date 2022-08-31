import React, { useState, useEffect } from 'react';
import { Form, Col, Button, Link } from "react-bootstrap";
import { useMutation } from '@apollo/client'; 
import './SearchBar.css'
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({placeholder, data}) => {

    const [filteredData, setFilteredData] = useState([]);
    const [userInput, setUserInput] = useState('');

    // const [login, { error }] = useMutation([])

    const handleFilter = async (event) => {
        event.preventDefault();
        const searchContent  = event.target.value;
        setUserInput(searchContent);

        const newFilter = data.filter((value) => {
            return value.category.toLowerCase().includes(searchContent.toLowerCase());
        });

        if (searchContent === "") {
            setFilteredData([]);
        } else {
            setFilteredData(searchContent);
        }
    };

        // try {
        //     const url  = `localhost`
        //     const query = `${url}${searchInput}`

        //     const response = await fetch(query)


        // } catch (err) {
        //     console.error(err);
        // }

return (
    <>
    <Form onSubmit={{/*handleFormSubmit*/}}>
        <Form.Row>
            <Col xs={12} md={8}>
                <Form.Control
                    name = 'userSearch'
                    className= 'searchBar'
                    // value = {userSearch}
                    // onChange = {(e) => setUserSearch(e.target.value)}
                    type = 'text'
                    size = 'lg'
                    placeholder = {placeholder}
                    data = {data}
                    />
                <SearchIcon />
                <Col className ="dataResult">
                {data.map((value, key) => {
                    return <a href= {value.category} className='autofillResult'>{value.category}</a>
                })}
            </Col>
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