import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Navbar from "./components/Navbar/Navbar";
import CreateContract from './components/CreateContract/CreateContract'
import ContactUs from './components/ContactUs/ContactUs'
import "./App.css";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <CreateContract />
      <ContactUs />

      <Router></Router>
    </ApolloProvider>
  );
}
export default App;