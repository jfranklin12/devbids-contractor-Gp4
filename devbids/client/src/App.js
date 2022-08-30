import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
      </Router>
    </ApolloProvider>
  );
}

export default App;
