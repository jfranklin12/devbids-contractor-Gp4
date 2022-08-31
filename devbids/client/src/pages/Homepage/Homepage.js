// import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import SearchBar from "../../components/SearchBar/SearchBar"
// import Auth from '../utils/auth';
import './Homepage.css'

 export default function Homepage() { 
    return (
        <div className='home-container'>
            <div className = 'jumbotron text-light bg-secondary'>
                <h1>Let's get working.</h1>
                <SearchBar></SearchBar>
                <Link to="/createContract">
                <button>Create a Contract</button>
                </Link>
                {/* <Link to="/searchContract">
                <button>Search for Contracts</button>
                </Link> */}
                
            </div>

        </div>
    );
};
