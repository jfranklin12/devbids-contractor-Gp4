import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

// import { setContext } from '@apollo/client/link/context'

import "bootstrap";
import "react-bootstrap";
import LoginSignup from "./components/LoginSignup/LoginSignup";

const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider >
  );
}

export default App;
