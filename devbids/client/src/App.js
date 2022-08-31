import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Navbar from "./components/Navbar/Navbar";
import CreateContract from "./pages/CreateContract/CreateContract";
import ContactUs from "./pages/ContactUs/ContactUs";
import Profile from "./pages/Profile/Profile";
import Homepage from "./pages/Homepage/Homepage";
//import Contracts from "./pages/Contracts/Contracts.js

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
        <CreateContract />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/createContract">
            <CreateContract />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
          {/* <Route path="/contracts">
            <Contracts />
          </Route> */}
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
export default App;
